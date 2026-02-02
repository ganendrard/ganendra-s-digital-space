-- Create contact_messages table for storing form submissions
CREATE TABLE public.contact_messages (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    ip_address TEXT,
    user_agent TEXT
);

-- Enable Row Level Security
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy: Allow anyone to insert (public contact form)
CREATE POLICY "Anyone can submit contact messages"
    ON public.contact_messages
    FOR INSERT
    WITH CHECK (true);

-- Create policy: Only authenticated admins can view messages (will be implemented later with admin system)
-- For now, no one can SELECT directly - data is protected
CREATE POLICY "No direct read access to contact messages"
    ON public.contact_messages
    FOR SELECT
    USING (false);

-- Add function to check rate limiting (max 5 messages per hour per IP)
CREATE OR REPLACE FUNCTION public.check_contact_rate_limit(check_ip TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    message_count INTEGER;
BEGIN
    SELECT COUNT(*) INTO message_count
    FROM public.contact_messages
    WHERE ip_address = check_ip
    AND created_at > (now() - INTERVAL '1 hour');
    
    RETURN message_count < 5;
END;
$$;
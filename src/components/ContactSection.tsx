import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send, Loader2, CheckCircle } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

// Client-side validation schema
const contactFormSchema = z.object({
  name: z.string()
    .trim()
    .min(1, { message: "Nama wajib diisi" })
    .max(100, { message: "Nama maksimal 100 karakter" }),
  email: z.string()
    .trim()
    .email({ message: "Format email tidak valid" })
    .max(255, { message: "Email maksimal 255 karakter" }),
  message: z.string()
    .trim()
    .min(1, { message: "Pesan wajib diisi" })
    .max(2000, { message: "Pesan maksimal 2000 karakter" }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const { data: responseData, error } = await supabase.functions.invoke('submit-contact', {
        body: {
          name: data.name,
          email: data.email,
          message: data.message,
          honeypot: "", // Empty honeypot field for legitimate submissions
        },
      });

      if (error) {
        console.error('Submission error:', error);
        toast.error("Gagal mengirim pesan. Silakan coba lagi.");
        return;
      }

      if (responseData?.error) {
        if (responseData.error.includes('Too many')) {
          toast.error("Terlalu banyak pesan. Silakan coba lagi nanti.");
        } else {
          toast.error(responseData.error);
        }
        return;
      }

      // Success
      setIsSuccess(true);
      toast.success("Pesan berhasil dikirim!");
      reset();
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
      
    } catch (error) {
      console.error('Unexpected error:', error);
      toast.error("Terjadi kesalahan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-4">Hubungi Saya</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-foreground to-transparent mx-auto mb-8 sm:mb-12" />

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-lg sm:text-xl font-serif font-semibold mb-4 sm:mb-6">Mari Terhubung</h3>
              <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
                Saya selalu terbuka untuk kesempatan baru, kolaborasi, atau sekadar berdiskusi. 
                Jangan ragu untuk menghubungi saya!
              </p>

              <div className="space-y-3 sm:space-y-4">
                <a
                  href="mailto:ganendra.rizkyd@gmail.com"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 glass-card hover:border-foreground/30 transition-colors group touch-manipulation"
                >
                  <div className="p-1.5 sm:p-2 rounded-lg bg-secondary group-hover:bg-accent transition-colors">
                    <Mail size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-sm sm:text-base truncate">ganendra.rizkyd@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+6289687269695"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 glass-card hover:border-foreground/30 transition-colors group touch-manipulation"
                >
                  <div className="p-1.5 sm:p-2 rounded-lg bg-secondary group-hover:bg-accent transition-colors">
                    <Phone size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">Telepon</p>
                    <p className="font-medium text-sm sm:text-base">+62 896 8726 9695</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 glass-card">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-secondary">
                    <MapPin size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">Lokasi</p>
                    <p className="font-medium text-sm sm:text-base">Jakarta Timur, DKI Jakarta</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 sm:mt-8">
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">Temukan saya di</p>
                <div className="flex gap-2 sm:gap-3">
                  <a
                    href="https://github.com/ganendrard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 rounded-full bg-secondary hover:bg-accent transition-all duration-300 hover:scale-110 touch-manipulation"
                    aria-label="GitHub"
                  >
                    <Github size={18} className="sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ganendrard/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 rounded-full bg-secondary hover:bg-accent transition-all duration-300 hover:scale-110 touch-manipulation"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} className="sm:w-5 sm:h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/ganendra.rd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 rounded-full bg-secondary hover:bg-accent transition-all duration-300 hover:scale-110 touch-manipulation"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} className="sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-5 sm:p-8">
              <h3 className="text-lg sm:text-xl font-serif font-semibold mb-4 sm:mb-6">Kirim Pesan</h3>
              
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-8 sm:py-12 text-center">
                  <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-primary mb-3 sm:mb-4" />
                  <h4 className="text-base sm:text-lg font-semibold mb-2">Pesan Terkirim!</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Terima kasih telah menghubungi saya. Saya akan segera membalas pesan Anda.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
                  {/* Honeypot field - hidden from users, bots will fill it */}
                  <input
                    type="text"
                    name="honeypot"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                  
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                      Nama
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register("name")}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-secondary border text-sm sm:text-base ${
                        errors.name ? 'border-destructive' : 'border-border'
                      } focus:border-foreground/50 focus:outline-none transition-colors`}
                      placeholder="Nama Anda"
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs sm:text-sm text-destructive">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register("email")}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-secondary border text-sm sm:text-base ${
                        errors.email ? 'border-destructive' : 'border-border'
                      } focus:border-foreground/50 focus:outline-none transition-colors`}
                      placeholder="email@example.com"
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs sm:text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                      Pesan
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      {...register("message")}
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-secondary border text-sm sm:text-base ${
                        errors.message ? 'border-destructive' : 'border-border'
                      } focus:border-foreground/50 focus:outline-none transition-colors resize-none`}
                      placeholder="Tulis pesan Anda..."
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs sm:text-sm text-destructive">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg bg-foreground text-background font-medium text-sm sm:text-base hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed touch-manipulation"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin sm:w-[18px] sm:h-[18px]" />
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send size={16} className="sm:w-[18px] sm:h-[18px]" />
                        Kirim Pesan
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

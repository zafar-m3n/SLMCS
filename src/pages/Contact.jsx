import { useState } from "react";

import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import AnimatedContent from "@/components/ui/AnimatedContent";

import TextInput from "@/components/form/TextInput";
import Select from "@/components/form/Select";

const inquiryOptions = [
  { value: "general", label: "General Inquiry" },
  { value: "volunteer", label: "Volunteer" },
  { value: "donation", label: "Donation" },
  { value: "partnership", label: "Partnership" },
  { value: "youth-wing", label: "Youth Wing" },
];

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    inquiryType: "",
    message: "",
  });

  const handleChange = (event) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSelectChange = (value) => {
    setForm((current) => ({
      ...current,
      inquiryType: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <main className="bg-primary pt-20 font-dm-sans text-text md:pt-22">
      <section className="relative overflow-hidden bg-secondary px-4 py-16 sm:px-6 md:py-20 lg:px-8">
        <div className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-accent1/20 blur-3xl"></div>
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-accent2/25 blur-3xl"></div>

        <AnimatedContent distance={60}>
          <div className="relative mx-auto max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent1">Contact SLMCS</p>

            <h1 className="mt-5 max-w-3xl font-instrument-serif text-5xl leading-tight text-white md:text-7xl">
              Let’s build impact together.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">
              Reach out for volunteering, donations, partnerships, Youth Wing inquiries, or general support.
            </p>
          </div>
        </AnimatedContent>
      </section>

      <section className="px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <AnimatedContent distance={50}>
            <div className="space-y-5">
              <div className="rounded-4xl border border-secondary/10 bg-white p-6 shadow-xl shadow-text/5">
                <h2 className="font-instrument-serif text-4xl text-secondary">Get in touch</h2>

                <div className="mt-8 space-y-5">
                  <a
                    href="tel:+94756264477"
                    className="flex gap-4 rounded-2xl bg-accent1/10 p-4 transition hover:bg-accent1/15"
                  >
                    <Icon icon="mdi:phone-outline" width="24" className="shrink-0 text-secondary" />
                    <div>
                      <p className="text-sm font-bold text-secondary">Phone</p>
                      <p className="mt-1 text-sm text-text/65">075 626 4477</p>
                    </div>
                  </a>

                  <a
                    href="mailto:slmcs.secretariat@gmail.com"
                    className="flex gap-4 rounded-2xl bg-accent2/10 p-4 transition hover:bg-accent2/15"
                  >
                    <Icon icon="mdi:email-outline" width="24" className="shrink-0 text-secondary" />
                    <div>
                      <p className="text-sm font-bold text-secondary">Email</p>
                      <p className="mt-1 break-all text-sm text-text/65">slmcs.secretariat@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex gap-4 rounded-2xl bg-secondary/5 p-4">
                    <Icon icon="mdi:map-marker-outline" width="24" className="shrink-0 text-secondary" />
                    <div>
                      <p className="text-sm font-bold text-secondary">Address</p>
                      <p className="mt-1 text-sm text-text/65">No. 15, Milagiriya Avenue, Colombo 04</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-4xl border border-secondary/10 bg-white shadow-xl shadow-text/5">
                <iframe
                  title="SLMCS Foundation Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0363568782623!2d79.85390987571431!3d6.886248693112726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b7b4626f235%3A0x18169e7a5adfdd7c!2smyBIZ!5e0!3m2!1sen!2slk!4v1777895631779!5m2!1sen!2slk"
                  className="h-80 w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </AnimatedContent>

          <AnimatedContent distance={50} delay={120}>
            <div className="rounded-4xl border border-secondary/10 bg-white p-6 shadow-xl shadow-text/5 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent2">Message Us</p>

              <h2 className="mt-3 font-instrument-serif text-4xl text-secondary">How can we help?</h2>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <TextInput
                    label="Full Name"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                  />

                  <TextInput
                    label="Email Address"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <Select
                  label="Inquiry Type"
                  value={form.inquiryType}
                  onChange={handleSelectChange}
                  options={inquiryOptions}
                  placeholder="Choose inquiry type"
                />

                <div>
                  <label className="mb-1 block text-sm font-medium text-text">Message</label>

                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Write your message..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded border border-secondary/20 bg-white px-3 py-2 text-sm text-text outline-none transition placeholder:text-text/45 focus:border-accent1"
                  ></textarea>
                </div>

                <Button type="submit" variant="primary" size="lg" icon="mdi:send-outline">
                  Send Message
                </Button>
              </form>
            </div>
          </AnimatedContent>
        </div>
      </section>
    </main>
  );
}

export default Contact;

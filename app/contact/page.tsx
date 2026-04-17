"use client";

import { sendEmail } from "@/lib/resend";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "react-toastify";

const Contact = () => {
  return (
    <div className="max-w-md mx-auto my-16 md:my-32 p-6 border rounded-xl shadow-sm">
      <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>

      <form
        action={async (formData) => {
          const result = await sendEmail(formData);

          if (result?.success) {
            toast.success("Message sent!");
          } else {
            toast.error("Something went wrong.");
          }
        }}
        className="flex flex-col gap-4"
      >
        {/* Name */}
        <div>
          <Label>
            Name <span className="text-red-500">*</span>
          </Label>
          <Input name="name" type="text" placeholder="Your name" required className="py-5" />
        </div>

        {/* Email */}
        <div>
          <Label>
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            name="senderEmail"
            type="email"
            placeholder="Your email"
            required
            className="py-5"
          />
        </div>

        {/* Phone */}
        <div>
          <Label>
            Phone <span className="text-red-500">*</span>
          </Label>
          <Input
            name="phone"
            type="tel"
            placeholder="Your phone number"
            required
            maxLength={10}
            onInput={(e) => {
              e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "");
            }}
          />
        </div>

        {/* Message */}
        <div>
          <Label>
            Message <span className="text-red-500">*</span>
          </Label>
          <Textarea
            name="message"
            placeholder="Your message"
            rows={5}
            required
            className="py-5"
          />
        </div>

        <Button type="submit" className="w-full py-5 cursor-pointer hover:bg-secondary">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default Contact;
import { NextResponse } from "next/server";
import { Resend } from "resend";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function cleanHeaderValue(value: string) {
     return value.replace(/[\r\n]/g, " ").trim();
}

export async function POST(request: Request) {
     const apiKey = process.env.RESEND_API_KEY;
     const recipient = process.env.CONTACT_EMAIL;
     const sender = process.env.RESEND_FROM_EMAIL;

     if (!apiKey || !recipient || !sender) {
          return NextResponse.json({ error: "Contact form is not configured." }, { status: 500 });
     }

     try {
          const body = await request.json();
          const name = typeof body.name === "string" ? body.name.trim() : "";
          const email = typeof body.email === "string" ? body.email.trim() : "";
          const message = typeof body.message === "string" ? body.message.trim() : "";
          const website = typeof body.website === "string" ? body.website.trim() : "";

          if (website) {
               return NextResponse.json({ success: true });
          }

          if (name.length < 2 || name.length > 100) {
               return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
          }

          if (!emailPattern.test(email) || email.length > 254) {
               return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
          }

          if (message.length < 10 || message.length > 5000) {
               return NextResponse.json({ error: "Please tell me a little more about your project." }, { status: 400 });
          }

          const resend = new Resend(apiKey);
          const { error } = await resend.emails.send({
               from: sender,
               to: [recipient],
               replyTo: email,
               subject: `New website enquiry from ${cleanHeaderValue(name)}`,
               text: `Name: ${name}\nEmail: ${email}\n\n${message}`
          });

          if (error) {
               console.error("Resend contact form error:", error);
               return NextResponse.json({ error: "The message could not be sent. Please try again." }, { status: 502 });
          }

          return NextResponse.json({ success: true });
     } catch (error) {
          console.error("Contact form request error:", error);
          return NextResponse.json({ error: "The message could not be sent. Please try again." }, { status: 500 });
     }
}

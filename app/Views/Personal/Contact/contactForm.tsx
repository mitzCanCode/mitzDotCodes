import { useState, type FormEvent } from "react";

const topics = [
    "Website request",
    "Mobile app request",
    "API Dev request",
    "Collaboration",
    "Project Idea",
    "Invite",
];

export default function ContactForm() {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending your message...");

        const form = event.currentTarget;
        const formData = new FormData(form);
        const topic = formData.get("topic");
        const message = formData.get("message");

        if (typeof topic !== "string" || typeof message !== "string") {
            setResult("Please choose a topic and enter a message.");
            setIsSubmitting(false);
            return;
        }

        formData.set("message", `[${topic}]\n\n${message}`);
        formData.set("access_key", "d135c697-38fc-46e8-8f04-eae49dac1dfb");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data: unknown = await response.json();
            const succeeded =
              typeof data === "object" &&
              data !== null &&
              "success" in data &&
              data.success === true;
            if (!response.ok || !succeeded) {
                setResult("Your message could not be sent. Please try again.");
                return;
            }

            form.reset();
            setResult("Message sent. Thanks for getting in touch!");
        } catch {
            setResult("Unable to send your message. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <>
            <header className="connect-heading contact-heading">
                <p className="connect-status">
                    <span className="status-light" aria-hidden="true" />
                    MESSAGE TERMINAL ONLINE
                </p>
                <h1 className="connect-title" id="contact-title">
                    Send a message
                </h1>
                <p className="connect-intro">
                    Got an idea? Want to collaborate? Fill out the form below and I'll get back to you as soon as possible.
                </p>
            </header>

                <label className="contact-field">
                    Your name
                    <input type="text" name="name" autoComplete="name" required />
                </label>

                <label className="contact-field">
                    Your email
                    <input
                        type="email"
                        name="email"
                        autoComplete="email"
                        required
                    />
                </label>

                <form className="contact-form" onSubmit={onSubmit}>
                <label className="contact-field">
                    What is this about?
                    <select name="topic" defaultValue="" required>
                        <option value="" disabled>
                            Select a topic
                        </option>
                        {topics.map((topic) => (
                            <option key={topic} value={topic}>
                                {topic}
                            </option>
                        ))}
                    </select>
                </label>

                <label className="contact-field">
                    Message
                    <textarea name="message" rows={6} required />
                </label>

                <button
                    className="connect-action contact-submit"
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Sending..." : "Send message"}
                </button>
                <p className="contact-feedback" role="status" aria-live="polite">
                    {result}
                </p>
            </form>
        </>
    );
}
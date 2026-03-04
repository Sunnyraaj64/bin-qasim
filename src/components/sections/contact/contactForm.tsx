import { useRef, useState } from 'react';
import Swal from 'sweetalert2';

const ContactForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = formRef.current;
        if (!form || submitting) return;
        setSubmitting(true);
        const formData = new FormData(form);
        try {
            const res = await fetch('/api/contact.php', { method: 'POST', body: formData });
            const data = await res.json().catch(() => ({ success: false, message: 'Something went wrong.' }));
            if (data.success) {
                Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: 'Message sent!', showConfirmButton: false, timer: 3000, timerProgressBar: true });
                form.reset();
            } else {
                Swal.fire({ toast: true, position: 'top-end', icon: 'error', title: data.message || 'Failed to send.', showConfirmButton: false, timer: 4000, timerProgressBar: true });
            }
        } catch {
            Swal.fire({ toast: true, position: 'top-end', icon: 'error', title: 'Network error. Please try again.', showConfirmButton: false, timer: 4000, timerProgressBar: true });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="contact-content">
            <h2>Get In Touch With Us</h2>
            <p>
                Have questions about our glass and mirror services? We're here to help! Fill out the form below and our team will get back to you as soon as possible. Whether you need a quote, have a question, or want to discuss your project, we'd love to hear from you.
            </p>
            <form ref={formRef} id="contact-form" method="POST" className="contact-form-items" onSubmit={handleSubmit}>
                <div className="row g-4">
                    <div className="col-lg-6 wow slideUp" data-delay=".3">
                        <div className="form-clt">
                            <span>Name*</span>
                            <input type="text" name="name" id="name" placeholder="Name" required />
                        </div>
                    </div>
                    <div className="col-lg-6 wow slideUp" data-delay=".5">
                        <div className="form-clt">
                            <span>Email*</span>
                            <input type="email" name="email" id="email" placeholder="Email" required />
                        </div>
                    </div>
                    <div className="col-lg-12 wow slideUp" data-delay=".7">
                        <div className="form-clt">
                            <span>Write Message*</span>
                            <textarea name="message" id="message" placeholder="Write Message" defaultValue={""} required />
                        </div>
                    </div>
                    <div className="col-lg-7 wow slideUp" data-delay=".9">
                        <button type="submit" className="theme-btn" disabled={submitting}>
                            {submitting ? 'Sending...' : 'Send Message'} <i className="fa-solid fa-arrow-right-long" />
                        </button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default ContactForm
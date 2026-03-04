import SectionTitle from '@/components/ui/sectionTitle';
import CustomDropdown from '@/components/ui/customDropdown';
import { useState, useRef } from 'react';
import Swal from 'sweetalert2';

interface Option {
    value: string;
    label: string;
}

const glassOptions: Option[] = [
    { value: 'smart-glass', label: 'Smart Glass' },
    { value: 'smart-film', label: 'Smart Film' },
    { value: 'tempered-glass', label: 'Tempered Glass' },
    { value: 'laminated-glass', label: 'Laminated Glass' },
    { value: 'mirror-installation', label: 'Mirror Installation' },
    { value: 'glass-repair', label: 'Glass Repair' },
    { value: 'custom-fabrication', label: 'Custom Fabrication' },
    { value: 'commercial-glass', label: 'Commercial Glass' },
    { value: 'residential-glass', label: 'Residential Glass' },
];

const AppointmentForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [selectedService, setSelectedService] = useState<Option>(glassOptions[0]);
    const [submitting, setSubmitting] = useState(false);

    const handleServiceSelect = (option: Option) => {
        setSelectedService(option);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = formRef.current;
        if (!form || submitting) return;
        setSubmitting(true);
        const formData = new FormData(form);
        formData.set('service', selectedService.value);
        try {
            const res = await fetch('/api/appointment.php', { method: 'POST', body: formData });
            const data = await res.json().catch(() => ({ success: false, message: 'Something went wrong.' }));
            if (data.success) {
                Swal.fire({ toast: true, position: 'top-end', icon: 'success', title: 'Request sent!', showConfirmButton: false, timer: 3000, timerProgressBar: true });
                form.reset();
                setSelectedService(glassOptions[0]);
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
        <section id="appointment-section" className="achievement-section fix section-padding pt-0">
            <div className="container">
                <div className="achievement-wrapper">
                    <SectionTitle className="mb-0">
                        <SectionTitle.SubTitle className='text-white'>
                            Talk to US
                        </SectionTitle.SubTitle>
                        <SectionTitle.Title className='text-white'>
                            Appointment
                        </SectionTitle.Title>
                    </SectionTitle>
                    <div className="appointment-form-wrapper">
                        <form ref={formRef} id="appointment-form" method="POST" className="contact-form-items appointment-form" onSubmit={handleSubmit}>
                            <input type="hidden" name="service" value={selectedService.value} />
                            <div className="row g-4">
                                <div className="col-lg-6 wow slideUp" data-delay=".3">
                                    <div className="form-clt">
                                        <span>Name*</span>
                                        <input type="text" name="name" id="appointment-name" placeholder="Name" required />
                                    </div>
                                </div>
                                <div className="col-lg-6 wow slideUp" data-delay=".5">
                                    <div className="form-clt">
                                        <span>Email*</span>
                                        <input type="email" name="email" id="appointment-email" placeholder="Email" required />
                                    </div>
                                </div>
                                <div className="col-lg-6 wow slideUp" data-delay=".7">
                                    <div className="form-clt">
                                        <span>Phone Number*</span>
                                        <input type="tel" name="phone" id="appointment-phone" placeholder="Your Phone Number" required />
                                    </div>
                                </div>
                                <div className="col-lg-6 wow slideUp" data-delay=".7">
                                    <div className="form-clt">
                                        <span>Service Type*</span>
                                        <CustomDropdown 
                                            options={glassOptions} 
                                            onSelect={handleServiceSelect}
                                            value={selectedService}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6 wow slideUp" data-delay=".9">
                                    <div className="form-clt">
                                        <span>Write Message*</span>
                                        <textarea 
                                            name="message" 
                                            id="appointment-message" 
                                            placeholder="Write Message" 
                                            defaultValue={""}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 wow slideUp" data-delay="1.1">
                                    <button type="submit" className="theme-btn appointment-btn" disabled={submitting}>
                                        {submitting ? 'Sending...' : 'Send Appointment Request'} <i className="fa-solid fa-arrow-right-long" />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentForm;

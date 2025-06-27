'use client'
import { useState } from 'react'
import {
     FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope, FaPhone
} from "react-icons/fa";

export default function ContactUs() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)
        setError('')
        setSuccess(false)
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })
            if (!res.ok) throw new Error('Failed to send message')
            setSuccess(true)
            setForm({ name: '', email: '', message: '' })
        } catch {
            setError('Something went wrong. Please try again later.')
        }
        setLoading(false)
    }

    return (
        <div className="flex flex-col">
            <div className="px-4 py-6">
                <h1 className="flex text-4xl md:text-5xl font-bold mb-6 text-center space-x-5 justify-center align-center">
                    <div className="text-blue-600">Contact </div>
                    <div className="text-white"> Me</div>

                </h1>
                <p className="text-lg text-white mb-2 text-center">
                    Have questions, or need help? Reach out to me and Iwill get back to you as soon as possible.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 px-4 md:px-6 py-8 md:py-16 text-white">
                    <div className="relative w-64 md:w-72 h-64 md:h-72 flex items-center justify-center md:ml-40">
                        <div className="max-w-md w-full text-center">

                            <div className="mb-4 flex items-center justify-center gap-2">
                                <FaEnvelope className="text-blue-500" />
                                <span>manasraj1357@gmail.com</span>
                            </div>

                            <div className="mb-6 flex items-center justify-center gap-2">
                                <FaPhone className="text-blue-500" />
                                <span>+91-91555-57919</span>
                            </div>

                            <div className="flex justify-center gap-6 mt-6 text-2xl">
                                <a href="https://github.com/Manasraj9" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                                    <FaGithub />
                                </a>
                                <a href="https://www.linkedin.com/in/manas-raj-274780236/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                                    <FaLinkedin />
                                </a>
                                <a href="https://www.facebook.com/manas.raj.374549" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                                    <FaFacebook />
                                </a>
                                <a href="https://www.instagram.com/_.manas.raj._/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6 bg-white/10 rounded-lg shadow p-6 md:p-8 border-white/30 w-full max-w-md md:w-[400px] md:mr-40 mx-auto">
                        <div>
                            <label className="block mb-1 font-medium text-white">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-zinc-200 rounded focus:outline-none focus:ring-2 focus:ring-zinc-200"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium text-white">Your Email</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-zinc-200 rounded focus:outline-none focus:ring-2 focus:ring-zinc-200"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium text-white">Message</label>
                            <textarea
                                name="message"
                                rows={5}
                                value={form.message}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-zinc-200 rounded focus:outline-none focus:ring-2 focus:ring-zinc-200"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 text-white  rounded font-medium hover:bg-blue-900 transition"
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                        {success && (
                            <div className="mt-4 text-center text-emerald-600">
                                Message sent successfully!
                            </div>
                        )}
                        {error && (
                            <div className="mt-4 text-center text-red-600">
                                {error}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}
"use client"
import Link from "next/link"
import { MdEmail } from "react-icons/md"
import { contactInfo, socailType } from "./ContactInfo"
import Swal from 'sweetalert2'
import { useState } from "react"

interface ContactFormProps {
    loading: boolean,
    submitForm: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const showSuccess = () => {
        Swal.fire({
            icon: "success",
            text: "Your Message Has Been Delivered!",
            customClass: {
                popup: 'bg-white dark:bg-gray-800 text-black dark:text-white',
                confirmButton: 'bg-blue-500 text-white hover:bg-blue-700 focus:ring-1 focus:ring-blue-500',
            },

        });
    };

    const showError = () => {
        Swal.fire({
            icon: "error",
            text: "Something Went Wrong! Try Again Later",
            customClass: {
                popup: 'bg-white dark:bg-gray-800 text-black dark:text-white',
                confirmButton: 'bg-blue-500 text-white hover:bg-blue-700 focus:ring-1 focus:ring-blue-500',
            },

        });
    };

    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        event.preventDefault();
        const form = event.currentTarget as HTMLFormElement;
        const formData = new FormData(event.currentTarget as HTMLFormElement);

        formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY ?? "");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            showSuccess();
            form.reset();
            setLoading(false);
        } else {
            showError();
            setLoading(false);
        }

    };

    return (
        <section className="grid sm:grid-cols-2 items-start gap-10 px-6 md:px-10  max-w-screen-xl mt-4">
            <ContactDetails />
            <ContactForm loading={loading} submitForm={submitForm} />
        </section>
    )
}

const ContactDetails = () => {
    return (
        <div>
            <h1 className="text-gray-800 dark:text-white text-3xl md:text-4xl font-bold">Contact <span className="text-blue-500">Me</span></h1>
            <p className="text-sm text-gray-500 mt-4">
                {contactInfo.details}
            </p>
            <div className="mt-12">
                <h2 className="text-gray-800 dark:text-gray-400 text-base font-bold">Email</h2>
                <ul className="mt-4">
                    <li className="flex items-center">
                        <div className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <MdEmail className="text-xl text-blue-600" />
                        </div>
                        <Link href="#" className="text-sm ml-4 dark:text-gray-400">
                            <small className="block font-semibold">Gmail</small>
                            <strong>{contactInfo.mail}</strong>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="mt-12">
                <h2 className="text-gray-800 text-base font-bold dark:text-gray-400">Socials</h2>
                <ul className="flex mt-4 space-x-4 text-blue-600">
                    {contactInfo.socials.map((social, index) => (
                        <ContactSocial social={social} key={index} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

const ContactSocial = ({ social }: { social: socailType }) => {
    return (
        <li className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
            <Link href={social.link} target="_blank">
                <social.icon className="text-xl" />
            </Link>
        </li>
    )
}

const ContactForm: React.FC<ContactFormProps> = ({ loading, submitForm }) => {
    return (
        <form className="ml-auto space-y-4" onSubmit={submitForm}>
            <input
                type="text" name="name"
                placeholder="Name" required
                className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 dark:text-gray-300 dark:bg-inherit dark:border text-sm outline-blue-500 focus:bg-transparent"
            />
            <input
                type="email" name="email"
                placeholder="Email" required
                className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 dark:text-gray-300 dark:bg-inherit dark:border  text-sm outline-blue-500 focus:bg-transparent"
            />
            <input
                type="text" name="subject"
                placeholder="Subject" required
                className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 dark:text-gray-300 dark:bg-inherit dark:border  text-sm outline-blue-500 focus:bg-transparent"
            />
            <textarea
                placeholder="Message" name="message" required
                rows={6}
                className="w-full rounded-md px-4 bg-gray-100 text-gray-800 dark:text-gray-300 dark:bg-inherit dark:border  text-sm pt-3 outline-blue-500 focus:bg-transparent"
                defaultValue={""}
            />
            {loading ? (
                <div

                    className="text-white font-bold flex gap-2 justify-center items-center bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6"
                >
                    <span>Sending</span>
                    <div role="status">
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-gray-200 animate-spin  fill-blue-600"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"
                            />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"
                            />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            ) : (
                <button
                    type="submit"
                    className="text-white font-bold bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6"
                >
                    Send
                </button>
            )}

        </form>
    )
}

export default Contact
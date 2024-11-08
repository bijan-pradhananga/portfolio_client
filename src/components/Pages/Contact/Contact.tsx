"use client"
import Link from "next/link"
import { MdEmail } from "react-icons/md"
import { contactInfo, socailType } from "./ContactInfo"

interface ContactFormProps {
    submitForm: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const Contact = () => {
    const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
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
          window.alert('Your Message Has Been Delivered');
        }else{
          window.alert('Something Went Wrong! Try Again Later');
        }
      };
    return (
        <section className="grid sm:grid-cols-2 items-start gap-10 px-6 md:px-10  max-w-screen-xl mt-4">
            <ContactDetails />
            <ContactForm submitForm={submitForm}/>
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

const ContactSocial = ({ social }:{social:socailType}) => {
    return (
        <li className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
            <Link href={social.link} target="_blank">
                <social.icon className="text-xl" />
            </Link>
        </li>
    )
}

const ContactForm:React.FC<ContactFormProps> = ({submitForm}) => {
    return (
        <form className="ml-auto space-y-4"  onSubmit={submitForm}>
            <input
                type="text" name="name"
                placeholder="Name"
                className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 dark:text-gray-300 dark:bg-inherit dark:border text-sm outline-blue-500 focus:bg-transparent"
            />
            <input
                type="email" name="email"
                placeholder="Email"
                className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 dark:text-gray-300 dark:bg-inherit dark:border  text-sm outline-blue-500 focus:bg-transparent"
            />
            <input
                type="text" name="subject"
                placeholder="Subject"
                className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 dark:text-gray-300 dark:bg-inherit dark:border  text-sm outline-blue-500 focus:bg-transparent"
            />
            <textarea
                placeholder="Message" name="message"
                rows={6}
                className="w-full rounded-md px-4 bg-gray-100 text-gray-800 dark:text-gray-300 dark:bg-inherit dark:border  text-sm pt-3 outline-blue-500 focus:bg-transparent"
                defaultValue={""}
            />
            <button
                type="submit"
                className="text-white font-bold bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6"
            >
                Send
            </button>
        </form>
    )
}

export default Contact
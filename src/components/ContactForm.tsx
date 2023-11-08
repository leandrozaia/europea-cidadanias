import Image from "next/image"
import { MdLocationOn, MdPhone, MdAttachEmail } from "react-icons/md"
import { translations } from "@/utils/translations"
import { useRouter } from "next/router"
import emailJs from "@emailjs/browser"
import { useForm, SubmitHandler } from "react-hook-form"

interface Props {
  footer: {
    iframe: string
    address: string
    addressTwo: string
    phone: string
    email: string
    facebookUrl: string
    instagramUrl: string
    linkedInUrl: string
    whatsAppNumber: string
  }
}

interface Inputs {
  name: string
  email: string
  message: string
}

export function ContactForm({ footer }: Props) {
  const { locale } = useRouter()
  const { footerSection, contactForm } = translations[locale as string]

  const { handleSubmit, register, formState: { errors }, reset } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const templateParams = {
      from_name: data.name,
      message: data.message,
      email: data.email
    }

    emailJs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
    .then((response) => console.log(`Status: ${response.status}`))
    .catch((error) => console.log(`Error: ${error}`))

    reset()
  }

  return (
    <section className="relative w-full flex justify-center">
      <Image
        src="/bg_02.png"
        alt="Imagem de Portugal"
        width={0}
        height={0}
        sizes="100vw"
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute w-full h-full bg-main opacity-90" />
      <div className="relative max-w-5xl w-full my-24 px-4 lg:px-0">
        <h2 className="text-white text-4xl font-bold uppercase text-center mb-12">
          {contactForm.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="w-full">
            <h3 className="text-3xl text-white font-bold mb-4">
              {footerSection.address}
            </h3>
            <p className="flex gap-2 items-center text-white mb-8">
              <MdLocationOn className="w-5 h-5" />
              {footer.address}
            </p>
            <h3 className="text-3xl text-white font-bold mb-4">
              {footerSection.addressTwo}
            </h3>
            <p className="flex gap-2 items-center text-white mb-8">
              <MdLocationOn className="w-5 h-5" />
              {footer.addressTwo}
            </p>
            <h3 className="text-3xl text-white font-bold mb-4">
              {footerSection.phone}
            </h3>
            <p className="flex gap-2 items-center text-white mb-8">
              <MdPhone className="w-5 h-5" />
              {footer.phone}
            </p>
            <h3 className="text-3xl text-white font-bold mb-4">
              {footerSection.email}
            </h3>
            <p className="flex gap-2 items-center text-white mb-8">
              <MdAttachEmail className="w-5 h-5" />
              {footer.email}
            </p>
          </div>

          <form
            className="flex flex-col gap-4 w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="p-4 rounded-md"
              type="text"
              placeholder={contactForm.name}
              {...register(
                "name", { 
                required: "O nome é obrigatório.", 
                minLength: { value: 4, message: "O nome deve ter no mínimo 4 caracteres." }, 
                maxLength: { value: 64, message: "O nome deve ter no máximo 64 caracteres." }
              })}
            />
            {errors.name && <span className="text-sm text-white">{errors.name?.message}</span>}
            <input
              className="p-4 rounded-md"
              type="email"
              placeholder={contactForm.email}
              {...register(
                "email", {
                  required: "O e-mail é obrigatório.",
                  minLength: { value: 4, message: "O e-mail deve ter no mínimo 4 caracteres." },
                  maxLength: { value: 128, message: "O nome deve ter no máximo 128 caracteres." }
              })}
            />
            {errors.email && <span className="text-sm text-white">{errors.email?.message}</span>}
            <textarea
              cols={30}
              rows={10}
              className="p-4 rounded-md"
              placeholder={contactForm.message}
              {...register(
                "message", {
                  required: "A mensagem é obrigatória.",
                  minLength: { value: 4, message: "A mensagem deve ter no mínimo 4 caracteres." },
                  maxLength: { value: 512, message: "A mensagem deve ter no máximo 512 caracteres." }
              })}
            />
            {errors.message && <span className="text-sm text-white">{errors.message?.message}</span>}
            <button
              className="bg-second p-4 rounded-md text-white"
              type="submit"
            >
              {contactForm.button}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
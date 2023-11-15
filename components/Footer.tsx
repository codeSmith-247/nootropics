import { OutlineBtn } from "@/components/Button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"



const FooterContact = () => {
  return (
    <div className="grid w-full gap-2">
      <Input placeholder="Type your email here." className=" focus-visible:ring-purple-600 outline-purple-600 mb-1 rounded" />
      <Textarea placeholder="Type your message here." className=" focus-visible:ring-purple-600 outline-purple-600 mb-1 rounded" />
      <OutlineBtn>Send message</OutlineBtn>
    </div>
  )
}


const Footer = () => {
  return (
    <footer className="border-t p-12 grid grid-cols-10 max-[1000px]:grid-cols-6">
      <div className="col-span-2 flex items-center max-[1000px]:col-span-6 max-[700px]:justify-center text-center">
        <div className="title font-bold text-6xl text-purple-600">Nicks.</div>
      </div>

      <div className="col-span-2 flex flex-col justify-center max-[700px]:col-span-3 max-[700px]:text-center max-[700px]:my-12 max-[400px]:col-span-6 max-[400px]:mb-3">
        <div className="title font-bold text-xl uppercase">Company</div>
        <div className="mt-1.5">
          <div className="mb-1.5">About Us</div>
          <div className="mb-1.5">Products</div>
          <div className="mb-1.5">Careers</div>
        </div>
      </div>

      <div className="col-span-2 flex flex-col justify-center max-[700px]:col-span-3 max-[700px]:text-center max-[700px]:my-12 max-[400px]:col-span-6 max-[400px]:mt-3">
        <div className="title font-bold text-xl uppercase">Social Media</div>
        <div className="mt-1.5">
          <div className="mb-1.5">Facebook</div>
          <div className="mb-1.5">Instagram</div>
          <div className="mb-1.5">Twitter</div>
        </div>
      </div>

      <div className="col-span-4 max-[1000px]:col-span-6 max-[1000px]:mt-6">
        <div className="title font-bold text-xl uppercase mb-2">CONTACT US</div>
        <FooterContact />
      </div>
    </footer>
  );
}

export default Footer;
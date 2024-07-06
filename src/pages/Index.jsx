import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Header Section */}
      <header className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/placeholder.svg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl font-bold">Discover Egypt</h1>
          <p className="mt-4 text-xl">Explore the land of ancient wonders and vibrant culture</p>
        </div>
      </header>

      {/* History Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">History of Egypt</h2>
        <p className="mb-4">
          Egypt has a rich history that spans thousands of years, from the ancient pharaohs to modern times. The country is home to some of the world's most iconic monuments and artifacts.
        </p>
        <img src="/placeholder.svg" alt="Egyptian history" className="mx-auto object-cover w-full h-[400px]" />
      </section>

      {/* Culture Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Egyptian Culture</h2>
        <p className="mb-4">
          Egyptian culture is a blend of ancient traditions and modern influences. From traditional dance and music to vibrant festivals, Egypt's culture is a testament to its rich heritage.
        </p>
        <img src="/placeholder.svg" alt="Egyptian culture" className="mx-auto object-cover w-full h-[400px]" />
      </section>

      {/* Tourism Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Tourism in Egypt</h2>
        <p className="mb-4">
          Egypt is a popular tourist destination, known for its historical sites, beautiful landscapes, and luxurious resorts. From the pyramids of Giza to the beaches of the Red Sea, there is something for everyone.
        </p>
        <img src="/placeholder.svg" alt="Tourism in Egypt" className="mx-auto object-cover w-full h-[400px]" />
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <Input id="name" type="text" placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <Input id="email" type="email" placeholder="Your Email" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <Textarea id="message" placeholder="Your Message" />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Discover Egypt. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
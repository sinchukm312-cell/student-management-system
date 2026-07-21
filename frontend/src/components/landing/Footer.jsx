function Footer() {

  return (

    <footer
      id="contact"
      className="bg-blue-900 text-white py-12 text-center"
    >

      <h2 className="text-3xl font-bold">
        ICU Bed Management System
      </h2>


      <p className="mt-4 text-blue-200">
        Smart ICU bed allocation and patient management solution
      </p>


      {/* Contact Email */}
      <div className="mt-6">

        <p className="text-lg">
          Contact Us
        </p>

        <a
          href="mailto:support@icucare.com"
          className="text-blue-300 hover:text-white transition text-lg"
        >
          support@icucare.com
        </a>

      </div>


      <p className="mt-6 text-blue-200">
        © 2026 ICU Bed Management System. All Rights Reserved.
      </p>


    </footer>

  );

}

export default Footer;
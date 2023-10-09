import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className='flex justify-center items-center py-20 bg-gray-800'>
        <div className='w-full max-w-sm md:max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
          <form className='space-y-6'>
            <h5 className='text-xl md:text-2xl font-medium text-gray-900 dark:text-white text-center'>
              Contact Us for get Appointment
            </h5>
            <div>
              <label
                htmlFor='name'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Your Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                placeholder='John Doe'
                required
              />
            </div>
            <div>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Your Email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                placeholder='name@company.com'
                required
              />
            </div>
            <div>
              <label
                htmlFor='subject'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Subject
              </label>
              <input
                type='text'
                name='subject'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                placeholder='Your subject'
                required
              />
            </div>
            <div>
              <label
                htmlFor='message'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Message
              </label>
              <textarea
                name='message'
                id='message'
                rows='4'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                placeholder='Your message'
                required
              />
            </div>
            <button
              type='submit'
              className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Send Message
            </button>
            <div className='text-sm font-medium text-gray-500 dark:text-gray-300'>
              <Link
                to={"/"}
                className='text-blue-700 hover:underline dark:text-blue-500'
              >
                Back to Home
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import Person1 from '../../src/assets/Testimonials/Dhiman.jpg'
import Person2 from '../../src/assets/Testimonials/Nirob Raj.jpg'
import Person3 from '../../src/assets/Testimonials/Mahabub Alam.jpg'


const Testimonials = () => {
    const testimonials = [
        {
            name: "Dhiman Saha",
            position: "Techical Head, Mahin Group",
            message:
                "TechAura Digital transformed our website and boosted our online presence tremendously. Highly professional team!",
            image: Person1,
        },
        {
            name: "MD. Kamruzzaman",
            position: "CFO, Traffads",
            message:
                "Their UI/UX design services are top-notch. Our app users love the seamless experience they delivered.",
            image: Person2,
        },
        {
            name: "MD. Mahabub Alom",
            position: "Founder, TechnoGenix Solutions",
            message:
                "Amazing digital marketing strategies! Our traffic and sales increased significantly thanks to their efforts.",
            image: Person3,
        },
    ];

    return (
        <section className="py-20 bg-gray-50 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Clients Say</h2>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    Feedback from our happy clients who trusted TechAura Digital with their projects.
                </p>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
                        >
                            <p className="text-gray-700 mb-4">"{testimonial.message}"</p>
                            <div className="flex items-center gap-4 mt-4">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

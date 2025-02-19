import React from "react";

const Faq = () => {
  return (
    <div className="font-antonio font-normal dark:text-white container mx-auto py-16">
      <h3 className="text-5xl text-center mb-10">Questions or Concerns</h3>
      <div className="collapse collapse-plus">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-lg sm:text-2xl font-medium capitalize">
          What floor plans are available at Harmony Heights?
        </div>
        <div className="collapse-content border-b-2 border-primary">
          <p className="text-[1.2rem] md:text-lg text-gray-600 dark:text-gray-400 font-pSans">
            Harmony Heights offers 1 to 3-bedroom apartments, with sizes ranging
            from 702 to 1,294 square feet. Rent prices vary between $1,099 and
            $1,580 per month.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-lg sm:text-2xl font-medium capitalize">
          What amenities are provided?
        </div>
        <div className="collapse-content border-b-2 border-primary">
          <p className="text-[1.2rem] md:text-lg text-gray-600 dark:text-gray-400 font-pSans">
            Residents can enjoy amenities such as a fitness center, swimming
            pool, playground, clubhouse, and high-speed internet access. Each
            apartment includes in-unit washer and dryer, air conditioning,
            walk-in closets, and private balconies or patios.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-lg sm:text-2xl font-medium capitalize">
          Is Harmony Heights pet-friendly?
        </div>
        <div className="collapse-content border-b-2 border-primary">
          <p className="text-[1.2rem] md:text-lg text-gray-600 dark:text-gray-400 font-pSans">
            Yes, Harmony Heights welcomes pets. A maximum of two pets per
            apartment is allowed, with certain breed restrictions. There is a
            pet rent of $100 per month and a deposit of $200 per pet.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-lg sm:text-2xl font-medium capitalize">
          What are the application requirements?
        </div>
        <div className="collapse-content border-b-2 border-primary">
          <p className="text-[1.2rem] md:text-lg text-gray-600 dark:text-gray-400 font-pSans">
            All adults aged 18 or older must complete an application and pay a
            non-refundable application fee of $100. A non-refundable
            administration fee of $350 is also required to secure a specific
            unit. Leases should be signed within 24 hours of generation.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;

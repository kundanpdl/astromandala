import React from "react";

const Testimonials = () => {
  return (
    <div>
      <section id="testimonies" class="py-20">
        <div class="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
          <div class="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
            <div class="mb-12 space-y-5 md:mb-16 md:text-center">
              <h1 class="text-purple-900 text-5xl text-black-100 md:text-center font-semibold">
                Here's what others have to say about us.
              </h1>
            </div>
          </div>

          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <ul class="space-y-8">
              <li class="text-sm leading-6">
                <div class="relative group">
                  <div class="rounded-lg -inset-1"></div>
                  <div class="relative p-6 space-y-6 leading-none rounded-lg bg-base-100/50">
                    <div class="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                        class="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Prashant Karki"
                      />
                      <div>
                        <h3 class="text-lg font-semibold text-yellow-900">
                          Prashant Karki
                        </h3>
                      </div>
                    </div>
                    <p class="leading-normal text-black-300 text-md">
                      Find God.
                    </p>
                  </div>
                </div>
              </li>
              <li class="text-sm leading-6">
                <div class="relative group">
                  <div class="rounded-lg -inset-1"></div>
                  <div class="relative p-6 space-y-6 leading-none rounded-lg bg-base-100/50">
                    <div class="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                        class="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Maria Ramos"
                      />
                      <div>
                        <h3 class="text-lg font-semibold text-yellow-900">
                          Maria Ramos
                        </h3>
                      </div>
                    </div>
                    <p class="leading-normal text-black-300 text-md">
                      Find God.
                    </p>
                  </div>
                </div>
              </li>
            </ul>

            <ul class="hidden space-y-8 sm:block">
              <li class="text-sm leading-6">
                <div class="relative group">
                  <div class="rounded-lg -inset-1"></div>
                  <div class="relative p-6 space-y-6 leading-none rounded-lg bg-base-100/50">
                    <div class="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                        class="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Nischal Dhungana"
                      />
                      <div>
                        <h3 class="text-lg font-semibold text-yellow-900">
                          Nischal Dhungana
                        </h3>
                      </div>
                    </div>
                    <p class="leading-normal text-black-300 text-md">
                      Find God.
                    </p>
                  </div>
                </div>
              </li>
              <li class="text-sm leading-6">
                <div class="relative group">
                  <div class="rounded-lg -inset-1"></div>
                  <div class="relative p-6 space-y-6 leading-none rounded-lg bg-base-100/50">
                    <div class="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                        class="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Jharna Chaulagain"
                      />
                      <div>
                        <h3 class="text-lg font-semibold text-yellow-900">
                          Jharna Chaulagain
                        </h3>
                      </div>
                    </div>
                    <p class="leading-normal text-black-300 text-md">
                      Find God.
                    </p>
                  </div>
                </div>
              </li>
            </ul>

            <ul class="hidden space-y-8 lg:block">
              <li class="text-sm leading-6">
                <div class="relative group">
                  <div class="rounded-lg -inset-1"></div>
                  <div class="relative p-6 space-y-6 leading-none rounded-lg bg-base-100/50">
                    <div class="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                        class="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Emma Peterson"
                      />
                      <div>
                        <h3 class="text-lg font-semibold text-yellow-900">
                          Emma Peterson
                        </h3>
                      </div>
                    </div>
                    <p class="leading-normal text-black-300 text-md">
                      Find God.
                    </p>
                  </div>
                </div>
              </li>
              <li class="text-sm leading-6">
                <div class="relative group">
                  <div class="rounded-lg -inset-1"></div>
                  <div class="relative p-6 space-y-6 leading-none rounded-lg bg-base-100/50">
                    <div class="flex items-center space-x-4">
                      <img
                        src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
                        class="w-12 h-12 bg-center bg-cover border rounded-full"
                        alt="Sanjay Patel"
                      />
                      <div>
                        <h3 class="text-lg font-semibold text-yellow-900">
                          Sanjay Patel
                        </h3>
                      </div>
                    </div>
                    <p class="leading-normal text-black-300 text-md">
                      Find God.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

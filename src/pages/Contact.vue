<template>
  <div class="page">
    <section>
      <h1>Contact</h1>
      <p class="mt-3 text-lg text-slate-600">
        Want to collaborate or chat? Reach out through email or the form below.
      </p>
    </section>

    <section class="section grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="text-xl">Direct</h2>
        <div class="mt-4 space-y-2 text-sm">
          <p>
            <span class="font-semibold text-slate-600">Email:</span>
            <a href="mailto:radihjrprgs@example.com" class="ml-2">radihjrprgs@example.com</a>
          </p>
          <p>
            <span class="font-semibold text-slate-600">GitHub:</span>
            <a href="https://github.com/bsnman" target="_blank" rel="noreferrer" class="ml-2">@bsnman</a>
          </p>
          <p>
            <span class="font-semibold text-slate-600">LinkedIn:</span>
            <a href="https://www.linkedin.com/in/radih-jr-paraguas-b1a468154/" target="_blank" rel="noreferrer" class="ml-2">
              /in/radih-jr-paraguas-b1a468154
            </a>
          </p>
        </div>
      </div>

      <div class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 class="text-xl">Send a Message</h2>
        <p class="mt-2 text-sm text-slate-500">
          Replace the Formspree action URL with your form endpoint.
        </p>
        <form
          class="mt-4 space-y-4"
          method="POST"
          action="https://formspree.io/f/your-form-id"
        >
          <div>
            <label class="text-sm font-medium text-slate-600" for="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              minlength="2"
              class="mt-2 w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:border-accent focus:outline-none"
            />
          </div>
          <div>
            <label class="text-sm font-medium text-slate-600" for="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              class="mt-2 w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:border-accent focus:outline-none"
            />
          </div>
          <div>
            <label class="text-sm font-medium text-slate-600" for="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              minlength="10"
              class="mt-2 w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:border-accent focus:outline-none"
            ></textarea>
          </div>
          <button class="button-primary" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  </div>
</template>
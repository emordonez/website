<template>
  <form
    accept-charset="utf-8"
    action="https://formspree.io/xbjaeape"
    method="post"
  >
    <fieldset>
      <div class="flex flex-col mb-4">
        <label for="name" class="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          required
          class="py-2 px-3 border"
        >
      </div>
      <div class="flex flex-col mb-4">
        <label for="email" class="form-label">
          Email
        </label>
        <input
          type="email"
          name="_replyto"
          required
          class="py-2 px-3 border"
        >
      </div>
      <div class="flex flex-col mb-4">
        <label for="subject" class="form-label">
          Subject
        </label>
        <input
          type="text"
          name="_subject"
          required
          class="py-2 px-3 border"
        >
      </div>
      <div class="flex flex-col mb-4">
        <label for="message" class="form-label">
          Message
        </label>
        <textarea
          rows="8"
          name="message"
          required
          class="py-2 px-3 border"
        />
      </div>
    </fieldset>
    <button
      type="submit"
      class="button-label"
    >
      Send
    </button>
  </form>
</template>

import React from 'react'

export const TestForm = () => {
  return (
    <form name="contact" method="POST" data-netlify="true" action="/thanks">
      <input type="hidden" name="form-name" value="contact" />

      <input name="name" type="text" placeholder="name" required />
      <input
        name="email"
        type="email"
        placeholder="yourmail@example.com"
        required
      />
      <button type="submit">送信する</button>
    </form>
  )
}

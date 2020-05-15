import React from "react"

const questions = [
  {
    question: "Can I use the mockups for commercial purposes?",
    answer: "Yes - there are no restrictions on how you use your mockups",
  },
  {
    question: "Is it free?",
    answer: "Yes - this is a free tool to help you save time and effort",
  },
  {
    question:
      "Do I have to provide screenshots of specific sizes (width and height)?",
    answer:
      "We provide recommendations for the sizes of your screenshot, but don't worry about making them exact. All of the devices are generated around your image, so they will all fit perfectly - no gaps, stretching, or cropping needed. If something looks a little bit off, that would be a good point to try taking screenshots with different aspect ratios",
  },
  {
    question: "Can I export the images with a transparent background?",
    answer:
      "Yes! In the editor, there is a transparent option in the pre-provided list of colors. You can also enter 'transparent' into the input box. Shadows will be properly rendered still, although you may need to view the image in an advanced editor to see them properly.",
  },
  {
    question: "How many images can I generate?",
    answer:
      "Currently, you can work on one image at a time, but there is no limit to how many you can export. This is a free tool, go nuts!",
  },
  {
    question: "Do you store my images on your server somewhere?",
    answer:
      "Nope, everything takes place right in your browser. We do not store any of the images you upload on any servers.",
  },
  {
    question: "What devices are available to select from?",
    answer:
      "Currently, you can choose from a Safari browser, an iPhone (with or without the notch), an Android phone, a Macbook laptop, and an iMac desktop. All devices have light and dark color options, and some have additional selections like gold and silver.",
  },
]

const FAQ = () => {
  return (
    <section className="w-full py-8 px-4 md:px-8 text-center">
      <h2 className="highlight text-3xl">Frequently Asked Questions</h2>
      <div className="text-left max-w-2xl mx-auto mt-8">
        {questions.map(q => (
          <div className="my-8">
            <h6 className="text-sm border-b border-gray-200">{q.question}</h6>
            <p className="my-2">{q.answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ

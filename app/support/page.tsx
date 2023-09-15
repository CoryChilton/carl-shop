export default function Support() {
  return (
    <div className="flex flex-col items-center pb-20 font-light leading-relaxed">
      <h1 className="text-2xl font-semibold">
        Support
      </h1>
      <div className="w-10 h-[2px] bg-gray-400 my-3" />
      <div className="flex flex-col w-3/4">
        <SubHeader>
          Shipping
        </SubHeader>
        <Question>
          How much is shipping?
        </Question>
        <ol className="list-decimal">
          <li>Standard Shipping: $4.99 and we only ship domestic at the moment.</li>
          <li>Fast Shipping: $9.95 and we only ship domestic at the moment.</li>
        </ol>
        <Question>
          How long will it take to get my order?
        </Question>
        <ol className="list-decimal">
          <li>Standard Shipping: On average, merchandise is produced and shipped from our facility 2-3 business day after purchase. Standard shipping/ transit times apply (1-7 days for domestic and 4-15 days for international).</li>
          <li>Fast Shipping: On average, customers can receive their order in 2-3 business days (not include handling time which may be 1-2 business days); sometimes it may take longer because of your location and the number of shirts you order.</li>
        </ol>
        <Question>
          Can I expedite my order?
        </Question>
        <p>
          We currently do not offer expedited shipping because all of our products are custom made-to-order after each purchase. We are looking into ways to expand our shipping options for you.
        </p>
        <Question>
          Can I deliver to multiple addresses?
        </Question>
        <p>
          We do not offer shipping to multiple addresses for a single order. If you would like items delivered to multiple addresses, please place those orders separately.
        </p>
        <Question>
          Do you alert us once our order ships?
        </Question>
        <p>
          Yes! A contact@californiaround.net will be sent to you with the tracking information once it ships out to you!
        </p>
        <Question>
          Where do I get tracking info?
        </Question>
        <p>
          A contact@californiaround.net with tracking details will be sent to you the moment your product is shipped out!
        </p>
        <Question>
          Have not received my order yet, now what?
        </Question>
        <p className="mb-3">
          First, check tracking info and see if it was delivered. If it says delivered but never received please allow a few more days. Sometimes products are delivered late by DHL or scanned delivered by mistake. Then call or contact@californiaround.net us regarding the whereabouts of your order!
        </p>
        
        <SubHeader>
          Ordering
        </SubHeader>
        <Question>
          What payment methods do you accept?
        </Question>
        <p>
          We accept Paypal, Debit and all major Credit Cards
        </p>
        <Question>
          What is your ordering process?
        </Question>
        <p>
          Ordering process is simply 4 quick steps:
        </p>
        <ol className="list-decimal">
          <li>Select your favorite items and add them to cart</li>
          <li>Enter your billing and shipping information</li>
          <li>Select shipping method</li>
          <li>Checkout</li>
        </ol>
        <Question>
          What should I do if I made a mistake on my order?
        </Question>
        <p>
          Immediately contact us by phone or contact@californiaround.net and our team will gladly resolve all of your concerns!
        </p>
        <Question>
          How do I change my order?
        </Question>
        <p>
          Email us regarding all changes to an order!
        </p>
        <Question>
          Can I cancel my order?
        </Question>
        <p>
          We can only process cancellations for items that have not gone into production. Please contact us at contact@californiaround.net with your order details we will cancel your order and provide a full refund. We cannot cancel orders once the printing process has begun.
        </p>
        <Question>
          What if my order is defective, wrong size, or incorrect product?
        </Question>
        <p>
          Send us an contact@californiaround.net with attaching photo(s) and we will send out a replacement within 72 business hours!
        </p>
      </div>
    </div>
  )
}

function SubHeader({children} : {children:string}) {
  return <h2 className="text-2xl font-semibold my-2">{children}</h2>
}

function Question({children} : {children:string}) {
  return <h3 className="text-lg font-semibold mt-3 mb-1">{children}</h3>
}


export function FAQList({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  return (
    <div className="faq-list">
      {items.map(({ question, answer }) => (
        <details className="faq-item" key={question}>
          <summary>{question}<span aria-hidden="true">+</span></summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  );
}

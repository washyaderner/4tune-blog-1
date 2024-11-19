export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto prose dark:prose-invert">
      <h1 className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
        About 4tune
      </h1>
      <p className="text-xl mb-8">
        A space for sharing insights and perspectives on technology, development, and innovation.
      </p>
      <div className="grid gap-8">
        <section>
          <h2>Our Focus</h2>
          <p>
            At 4tune, we explore the intersection of technology and innovation, sharing insights
            and experiences that help developers and technology enthusiasts stay ahead of the curve.
          </p>
        </section>
        <section>
          <h2>Topics We Cover</h2>
          <ul>
            <li>Software Development Best Practices</li>
            <li>Emerging Technologies and Trends</li>
            <li>Developer Tools and Productivity</li>
            <li>Tech Industry Insights</li>
            <li>Innovation and Future Tech</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
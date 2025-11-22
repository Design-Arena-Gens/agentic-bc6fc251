const highlights = [
  {
    title: "ترحيب دافئ",
    description:
      "عبّر عن الامتنان للزوار بكلمات عربية أصيلة تستقبلهم منذ اللحظة الأولى."
  },
  {
    title: "رسالة واضحة",
    description:
      "وضّح هدفك أو خدمتك في فقرة قصيرة تُمكّن القارئ من فهم قيمتك بسرعة."
  },
  {
    title: "دعوة للتحرّك",
    description:
      "استخدم زرًا واضحًا لتوجيه الزوار نحو الإجراء الأهم بالنسبة لك."
  }
];

export default function Page() {
  return (
    <main className="page">
      <section className="hero">
        <p className="greeting">أهلاً وسهلاً</p>
        <h1>مرحبًا بكم في مساحتكم العربية على الويب</h1>
        <p className="lead">
          هذه الواجهة المصغّرة تقدّم لك بداية أنيقة لموقع عربي
          معاصر، وتمنح زوارك انطباعًا أوليًا قويًا ومريحًا.
        </p>
        <a className="cta" href="#features">
          اكتشف الفكرة
        </a>
      </section>

      <section className="features" id="features">
        {highlights.map((item) => (
          <article className="feature-card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </article>
        ))}
      </section>

      <section className="footer-note">
        <h2>جاهز للتخصيص</h2>
        <p>
          يمكنك تعديل النصوص، إضافة صور، وربط الأزرار لتصميم تجربة ترحيب تناسب
          مشروعك الرقمي مع المحافظة على طابع عربي عصري.
        </p>
      </section>
    </main>
  );
}

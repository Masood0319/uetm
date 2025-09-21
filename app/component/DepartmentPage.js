// src/components/DepartmentPage.jsx


export default function DepartmentPage({ name, overview, programs, faculty, contact }) {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{name}</h1>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p>{overview}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Programs Offered</h2>
        <ul className="list-disc pl-6">
          {programs.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Faculty</h2>
        <div className="shadow-md">
          <span>
            <ul className="space-y-2">
              {faculty.map((f, i) => (
                <li key={i}>👨‍🏫 {f}</li>
              ))}
            </ul>
          </span>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Contact</h2>
        <p>{contact.building}, UET Mardan</p>
        <p>📞 {contact.phone}</p>
        <p>📧 {contact.email}</p>
      </section>
    </div>
  )
}

import { Link } from 'react-router-dom'

export default function PagePlaceholder({ student, title, figma, route, description }) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 text-center">
      <p className="mb-2 text-sm font-medium uppercase tracking-wider text-red-600">
        Зона разработки — {student}
      </p>
      <h1 className="mb-4 text-3xl font-bold text-gray-900">{title}</h1>
      <p className="mb-6 text-gray-600">{description}</p>
      <p className="mb-8 rounded-lg bg-gray-100 px-4 py-3 text-sm text-gray-700">
        Макет Figma: <code className="font-mono text-red-700">{figma}</code>
        <br />
        Маршрут: <code className="font-mono text-red-700">{route}</code>
      </p>
      <p className="text-sm text-gray-500">
        Инструкции:{' '}
        <code className="rounded bg-gray-100 px-1">
          docs/students/{student}/ru.md
        </code>{' '}
        и{' '}
        <code className="rounded bg-gray-100 px-1">
          docs/students/{student}/uz.md
        </code>
      </p>
      <Link
        to="/"
        className="mt-8 inline-block rounded bg-red-600 px-6 py-3 text-sm font-semibold uppercase text-white transition hover:bg-red-700"
      >
        На главную
      </Link>
    </section>
  )
}

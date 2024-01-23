const projects = [
  {
    emoji: "🪖",
    name: "UAGPMC",
    description:
      'A no-BS milsim community formed on the idea of real fun with friends. No training or exams, and definitely no "yes sir, no sir" bootcamp simulations.',
    url: "https://uagpmc.unnamed.group",
  },
  {
    emoji: "🌊",
    name: "Unnamed Esports",
    description:
      "Non-profit esports organization that aims to provide a safe and fun environment for gamers of all skill levels to compete in.",
    url: "https://esports.unnamed.group",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex flex-col space-y-4 text-justify">
        <h1 className="text-4xl font-bold">Hello, @everyone!</h1>
        <p className="text-2xl">
          Unnamed Group is a non-profit organisation dedicated to developing and
          promoting communities that are fun, inclusive, and welcoming to all.
          We believe that games should be fun, not work.
        </p>
        <p className="text-2xl">
          We are currently working on a number of projects, including:
        </p>
        <ul className="text-2xl ml-4 space-y-2">
          {projects.map((project, index) => {
            return (
              <li key={index}>
                <span>{project.emoji}</span>
                <a href={project.url} className="text-yellow-300 mx-2">
                  {project.name}
                </a>
                <span>{project.description}</span>
              </li>
            );
          })}
        </ul>
        <p className="text-2xl">
          Feel free to join our Discord server and say hello, or email us at
          hello@unnamed.group for any business enquiries.
        </p>
        <span className="text-xs text-right opacity-25 pt-16">
          Est. 2016 – Inc. 2023 (
          <a
            href="https://find-and-update.company-information.service.gov.uk/company/14751183"
            className="text-yellow-300"
          >
            14751183
          </a>
          )
        </span>
      </main>
    </>
  );
}

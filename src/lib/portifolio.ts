export async function loadJson<T>(file: string): Promise<T> {
  const response = await fetch(`/ai/${file}`);

  if (!response.ok) {
    throw new Error(`Failed to load ${file}`);
  }

  return response.json();
}

export async function loadPortfolio() {
  const [
    assistant,
    about,
    skills,
    projects,
    experience,
    certifications,
    contact,
    links,
  ] = await Promise.all([
    loadJson("assistant.json"),
    loadJson("about.json"),
    loadJson("skills.json"),
    loadJson("projects.json"),
    loadJson("experience.json"),
    loadJson("certifications.json"),
    loadJson("contact.json"),
    loadJson("links.json"),
  ]);

  return {
    assistant,
    about,
    skills,
    projects,
    experience,
    certifications,
    contact,
    links,
  };
}
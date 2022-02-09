// Utilities
import sanityClient from './client';

const fetchExperience = async () => {
  const data = await sanityClient.fetch(`*[_type == 'experience'] {
    company,
    title,
    dates,
    summary,
    header,
    responsibilities,
    'techStack': stack[]-> { technology, 'iconUrl': icon.asset->url },
    'imageUrl': image.asset->url,
  }`);

  return data;
};

const fetchSkills = async () => {
  const data = await sanityClient.fetch(`*[_type == 'skills'] {
    technology,
    'iconUrl': icon.asset->url,
    experiences,
    confidence,
  }`);

  return data;
};

const fetchProjects = async () => {
  const data = await sanityClient.fetch(`*[_type == 'projects'] {
    title,
    summary,
    'imageUrl': image.asset->url,
    'techStack': stack[]->technology,
  }`);

  return data;
};

const fetchSocialMedia = async () => {
  const data = await sanityClient.fetch(`*[_type == 'socialMedia'] {
    platform,
    link,
  }`);

  return data;
};

export { fetchExperience, fetchSkills, fetchProjects, fetchSocialMedia };

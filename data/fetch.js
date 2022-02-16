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
    loadOrder,
  }`);

  return data;
};

const fetchSkills = async () => {
  const data = await sanityClient.fetch(`*[_type == 'skills'] {
    technology,
    'imageUrl': icon.asset->url,
    experiences,
    confidence,
    category,
    radii,
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

const fetchAccomplishments = async () => {
  const data = await sanityClient.fetch(`*[_type == 'accomplishments'] {
    accomplishment,
  }`);

  return data;
};

export {
  fetchExperience,
  fetchSkills,
  fetchProjects,
  fetchSocialMedia,
  fetchAccomplishments,
};

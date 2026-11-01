import React from 'react';
import Timeline from '../components/common/Timeline';

export default function ExperienceSection({ experiences, isDark = true }) {
  return <Timeline data={experiences} isDark={isDark} />;
}

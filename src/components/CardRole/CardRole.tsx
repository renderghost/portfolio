import { CardNote } from '@/components/CardNote/CardNote';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROLES_BASE_PATH } from './CardRole.constants';
import { CardRoleProps } from './CardRole.types';

export const CardRole: React.FC<CardRoleProps> = ({ role }) => {
  const navigate = useNavigate();

  return (
    <CardNote
      coverImage={role.coverImage}
      meta={{
        date: role.date,
      }}
      title={role.title}
      description={`${role.company} | ${role.subtitle}`}
      onClick={() => navigate(`${ROLES_BASE_PATH}/${role.slug}`)}
    />
  );
};

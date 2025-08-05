import { useState, useEffect } from 'react';
import { SiteContent } from '../types/cms';
import { CMSService } from '../services/cmsService';

export const useSiteContent = () => {
  const [content, setContent] = useState<SiteContent>(CMSService.getSiteContent());

  useEffect(() => {
    // Listen for storage changes to update content when admin makes changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'tayyar_cms_content') {
        setContent(CMSService.getSiteContent());
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return content;
};
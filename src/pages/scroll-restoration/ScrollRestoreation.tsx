import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollRestoration() {
  const location = useLocation();
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const effectExecutedRef = useRef(false); // Ref를 추가합니다.

  // 스크롤 위치 저장
  useEffect(() => {
    // session-storage에 현재 보고 있는 scrollY 저장
    const handleScroll = () => {
      sessionStorage.setItem(`scrollPosition-${location.key}`, window.scrollY.toString());
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  // 이미지 로드 상태 업데이트
  useEffect(() => {
    const updateImageLoadStatus = () => {
      const images = document.querySelectorAll('img');
      let allImagesCount = images.length;

      if (allImagesCount === 0) {
        setImagesLoaded(true);
        return;
      }

      const onImageLoad = () => {
        allImagesCount -= 1;
        if (allImagesCount === 0) {
          setImagesLoaded(true);
        }
      };

      images.forEach((img) => {
        if (img.complete) {
          onImageLoad();
        } else {
          img.addEventListener('load', onImageLoad);
        }
      });

      return () => {
        images.forEach((img) => {
          img.removeEventListener('load', onImageLoad);
        });
      };
    };

    // 초기 호출
    const cleanupInitial = updateImageLoadStatus();

    // MutationObserver 설정
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
          updateImageLoadStatus();
        }
      });
    });
    
    // MutationObserver 설정
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      if (cleanupInitial) cleanupInitial();
      observer.disconnect();
    };
  }, []);

  // 이미지 로드 상태 업데이트 시 스크롤 위치 저장
  useEffect(() => {
    const imgs = document.querySelectorAll('img');
    console.log(imgs);
    // 모든 이미지가 로드 된 것이 탐지될 때 Session에 저장된 곳으로 이동
    if (imagesLoaded && !effectExecutedRef.current) {
      const scrollPosition = sessionStorage.getItem(`scrollPosition-${location.key}`);
      if (scrollPosition) {
        // setTimeout 추가
        setTimeout(() => {
          window.scrollTo(0, Number(scrollPosition));
          console.log('scrollPosition', scrollPosition);
        });
      }
      effectExecutedRef.current = true; // Ref를 업데이트합니다.
    }
  }, [imagesLoaded]);

  return null;
}

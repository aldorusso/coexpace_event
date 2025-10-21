"use client"
import { useState, useRef } from "react";
import Image from "next/image";

// Import all current images
import about_thumb from "@/assets/img/about/thumb.jpg"
import about_bg from "@/assets/img/about/bg.jpg"
import about_flower from "@/assets/img/about/flower.png"
import hero_shape from "@/assets/img/hero/shape.png"
import hero_thumb from "@/assets/img/hero/thumb.png"
import hero_bg from "@/assets/img/hero/bg.jpg"
import brand_1 from "@/assets/img/brands/brands.png"
import brand_2 from "@/assets/img/brands/brands-2.png"
import brand_3 from "@/assets/img/brands/brands-3.png"
import brand_4 from "@/assets/img/brands/brands-4.png"
import brand_5 from "@/assets/img/brands/brands-5.png"
import brand_6 from "@/assets/img/brands/brands-6.png"
import brand_7 from "@/assets/img/brands/brands-7.png"
import brand_8 from "@/assets/img/brands/brands-8.png"
import banner_bg from "@/assets/img/banner/banner.jpg"
import schedule_bg from "@/assets/img/schedule/bg.jpg"
import team_bg from "@/assets/img/team/bg.png"
import text_round from "@/assets/img/text/round.png"
import team_1 from "@/assets/img/team/member-1.png"
import team_2 from "@/assets/img/team/member-2.png"
import team_3 from "@/assets/img/team/member-3.png"
import team_4 from "@/assets/img/team/member-4.png"
import team_5 from "@/assets/img/team/member-5.png"
import team_6 from "@/assets/img/team/member-6.png"
import team_7 from "@/assets/img/team/member-7.png"
import team_8 from "@/assets/img/team/member-8.png"
import logo_coexpace from "@/assets/img/logo/coexpace-logo.png"
import logo_white from "@/assets/img/logo/logo-white.png"
import logo_white_2 from "@/assets/img/logo/logo-white-2.png"
import logo_black from "@/assets/img/logo/logo-black.png"
import favicon from "@/assets/img/logo/favicon.png"

interface ImageData {
  id: string;
  name: string;
  description: string;
  path: string;
  currentImage: any;
  section: string;
}

const ImageEditor = () => {
  const imagesList: ImageData[] = [
    // Banner Section
    { id: "hero_bg", name: "Banner Background", description: "Main banner background image", path: "src/assets/img/hero/bg.jpg", currentImage: hero_bg, section: "Banner" },
    { id: "hero_thumb", name: "Banner Main Image", description: "Main hero image/thumbnail", path: "src/assets/img/hero/thumb.png", currentImage: hero_thumb, section: "Banner" },
    { id: "hero_shape", name: "Banner Shape Decoration", description: "Floating shape decoration", path: "src/assets/img/hero/shape.png", currentImage: hero_shape, section: "Banner" },

    // About Section
    { id: "about_bg", name: "About Background", description: "About section background", path: "src/assets/img/about/bg.jpg", currentImage: about_bg, section: "About" },
    { id: "about_thumb", name: "About Main Image", description: "About section main image", path: "src/assets/img/about/thumb.jpg", currentImage: about_thumb, section: "About" },
    { id: "about_flower", name: "About Flower Decoration", description: "Flower decoration background", path: "src/assets/img/about/flower.png", currentImage: about_flower, section: "About" },

    // Team Section
    { id: "team_bg", name: "Team Background", description: "Team section background", path: "src/assets/img/team/bg.png", currentImage: team_bg, section: "Team" },
    { id: "team_1", name: "Speaker 1 - Nirdosh Kohra", description: "Team member/speaker 1 photo", path: "src/assets/img/team/nirdosh-kohra.png", currentImage: team_1, section: "Team" },
    { id: "team_2", name: "Speaker 2", description: "Team member/speaker 2 photo", path: "src/assets/img/team/member-2.png", currentImage: team_2, section: "Team" },
    { id: "team_3", name: "Speaker 3", description: "Team member/speaker 3 photo", path: "src/assets/img/team/member-3.png", currentImage: team_3, section: "Team" },
    { id: "team_4", name: "Speaker 4", description: "Team member/speaker 4 photo", path: "src/assets/img/team/member-4.png", currentImage: team_4, section: "Team" },
    { id: "team_5", name: "Speaker 5", description: "Team member/speaker 5 photo", path: "src/assets/img/team/member-5.png", currentImage: team_5, section: "Team" },
    { id: "team_6", name: "Speaker 6", description: "Team member/speaker 6 photo", path: "src/assets/img/team/member-6.png", currentImage: team_6, section: "Team" },
    { id: "team_7", name: "Speaker 7", description: "Team member/speaker 7 photo", path: "src/assets/img/team/member-7.png", currentImage: team_7, section: "Team" },
    { id: "team_8", name: "Speaker 8", description: "Team member/speaker 8 photo", path: "src/assets/img/team/member-8.png", currentImage: team_8, section: "Team" },

    // Experience Section
    { id: "banner_bg", name: "Experience Background", description: "Experience/Banner section background", path: "src/assets/img/banner/banner.jpg", currentImage: banner_bg, section: "Experience" },

    // Schedule Section
    { id: "schedule_bg", name: "Schedule Background", description: "Schedule section background", path: "src/assets/img/schedule/bg.jpg", currentImage: schedule_bg, section: "Schedule" },

    // Text Slider
    { id: "text_round", name: "Text Slider Icon", description: "Round arrow icon for text slider", path: "src/assets/img/text/round.png", currentImage: text_round, section: "Text Slider" },

    // Brand Section
    { id: "brand_1", name: "Brand Logo 1", description: "Partner/sponsor logo 1", path: "src/assets/img/brands/brands.png", currentImage: brand_1, section: "Brands" },
    { id: "brand_2", name: "Brand Logo 2", description: "Partner/sponsor logo 2", path: "src/assets/img/brands/brands-2.png", currentImage: brand_2, section: "Brands" },
    { id: "brand_3", name: "Brand Logo 3", description: "Partner/sponsor logo 3", path: "src/assets/img/brands/brands-3.png", currentImage: brand_3, section: "Brands" },
    { id: "brand_4", name: "Brand Logo 4", description: "Partner/sponsor logo 4", path: "src/assets/img/brands/brands-4.png", currentImage: brand_4, section: "Brands" },
    { id: "brand_5", name: "Brand Logo 5", description: "Partner/sponsor logo 5", path: "src/assets/img/brands/brands-5.png", currentImage: brand_5, section: "Brands" },
    { id: "brand_6", name: "Brand Logo 6", description: "Partner/sponsor logo 6", path: "src/assets/img/brands/brands-6.png", currentImage: brand_6, section: "Brands" },
    { id: "brand_7", name: "Brand Logo 7", description: "Partner/sponsor logo 7", path: "src/assets/img/brands/brands-7.png", currentImage: brand_7, section: "Brands" },
    { id: "brand_8", name: "Brand Logo 8", description: "Partner/sponsor logo 8", path: "src/assets/img/brands/brands-8.png", currentImage: brand_8, section: "Brands" },

    // Logos Section
    { id: "logo_coexpace", name: "Coexpace Logo (Main)", description: "Main Coexpace logo", path: "src/assets/img/logo/coexpace-logo.png", currentImage: logo_coexpace, section: "Logos" },
    { id: "logo_white", name: "Logo White", description: "White version of logo", path: "src/assets/img/logo/logo-white.png", currentImage: logo_white, section: "Logos" },
    { id: "logo_white_2", name: "Logo White 2", description: "Alternative white logo", path: "src/assets/img/logo/logo-white-2.png", currentImage: logo_white_2, section: "Logos" },
    { id: "logo_black", name: "Logo Black", description: "Black version of logo", path: "src/assets/img/logo/logo-black.png", currentImage: logo_black, section: "Logos" },
    { id: "favicon", name: "Favicon", description: "Site favicon icon", path: "src/assets/img/logo/favicon.png", currentImage: favicon, section: "Logos" },
  ];

  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const groupedImages = imagesList.reduce((acc, img) => {
    if (!acc[img.section]) {
      acc[img.section] = [];
    }
    acc[img.section].push(img);
    return acc;
  }, {} as Record<string, ImageData[]>);

  const handleImageClick = (img: ImageData) => {
    setSelectedImage(img);
    setMessage(null);
  };

  const handleFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !selectedImage) return;

    setUploading(true);
    setMessage(null);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('path', selectedImage.path);

      const response = await fetch('/api/upload-image', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: '✅ Image uploaded successfully! Refresh the page to see changes.' });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        setMessage({ type: 'error', text: `❌ Error: ${data.error}` });
      }
    } catch (error) {
      setMessage({ type: 'error', text: '❌ Error uploading file' });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#fff', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '48px', marginBottom: '10px', color: '#c6d306' }}>Image Editor</h1>
          <p style={{ fontSize: '18px', color: '#aaa' }}>Manage all images for the home page</p>
        </div>

        <div style={{ background: '#1a1a1a', padding: '30px', borderRadius: '10px', marginBottom: '30px' }}>
          <h3 style={{ color: '#c6d306', marginBottom: '15px' }}>📝 Instructions</h3>
          <ol style={{ lineHeight: '1.8', color: '#ccc' }}>
            <li><strong>Click on any image</strong> below to select it</li>
            <li><strong>Click "Upload New Image"</strong> to choose a file from your computer</li>
            <li>The new image will automatically replace the old one</li>
            <li>The page will refresh to show your changes</li>
          </ol>
        </div>

        {message && (
          <div style={{
            background: message.type === 'success' ? '#1a4d1a' : '#4d1a1a',
            padding: '15px 20px',
            borderRadius: '8px',
            marginBottom: '20px',
            border: message.type === 'success' ? '1px solid #2d7a2d' : '1px solid #7a2d2d',
            fontSize: '16px',
            textAlign: 'center'
          }}>
            {message.text}
          </div>
        )}

        {Object.keys(groupedImages).map((section) => (
          <div key={section} style={{ marginBottom: '50px' }}>
            <h2 style={{
              fontSize: '28px',
              marginBottom: '25px',
              paddingBottom: '10px',
              borderBottom: '2px solid #c6d306',
              color: '#fff'
            }}>
              {section}
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '20px'
            }}>
              {groupedImages[section].map((img) => (
                <div
                  key={img.id}
                  onClick={() => handleImageClick(img)}
                  style={{
                    background: selectedImage?.id === img.id ? '#2a2a2a' : '#1a1a1a',
                    padding: '20px',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    border: selectedImage?.id === img.id ? '2px solid #c6d306' : '2px solid transparent',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (selectedImage?.id !== img.id) {
                      e.currentTarget.style.background = '#252525';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedImage?.id !== img.id) {
                      e.currentTarget.style.background = '#1a1a1a';
                    }
                  }}
                >
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '200px',
                    marginBottom: '15px',
                    background: '#000',
                    borderRadius: '5px',
                    overflow: 'hidden'
                  }}>
                    <Image
                      src={img.currentImage}
                      alt={img.name}
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <h3 style={{ fontSize: '18px', marginBottom: '8px', color: '#fff' }}>{img.name}</h3>
                  <p style={{ fontSize: '14px', color: '#888', marginBottom: '10px' }}>{img.description}</p>
                  <p style={{
                    fontSize: '12px',
                    color: '#c6d306',
                    fontFamily: 'monospace',
                    background: '#0a0a0a',
                    padding: '8px',
                    borderRadius: '4px',
                    wordBreak: 'break-all'
                  }}>
                    {img.path}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {selectedImage && (
          <div style={{
            position: 'fixed',
            bottom: '0',
            left: '0',
            right: '0',
            background: 'linear-gradient(to top, #1a1a1a 0%, rgba(26, 26, 26, 0.98) 90%, transparent 100%)',
            padding: '30px',
            boxShadow: '0 -5px 20px rgba(0,0,0,0.5)',
            zIndex: 1000,
          }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '300px' }}>
                  <h3 style={{ fontSize: '24px', color: '#c6d306', marginBottom: '5px' }}>
                    Selected: {selectedImage.name}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#aaa' }}>
                    File path: <strong style={{ color: '#fff' }}>{selectedImage.path}</strong>
                  </p>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={handleFileSelect}
                    disabled={uploading}
                    style={{
                      background: uploading ? '#666' : '#c6d306',
                      color: '#fff',
                      border: 'none',
                      padding: '12px 24px',
                      borderRadius: '5px',
                      fontSize: '16px',
                      cursor: uploading ? 'not-allowed' : 'pointer',
                      fontWeight: 'bold',
                    }}
                  >
                    {uploading ? 'Uploading...' : '📁 Upload New Image'}
                  </button>
                  <button
                    onClick={() => setSelectedImage(null)}
                    style={{
                      background: '#333',
                      color: '#fff',
                      border: 'none',
                      padding: '12px 24px',
                      borderRadius: '5px',
                      fontSize: '16px',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
};

export default ImageEditor;

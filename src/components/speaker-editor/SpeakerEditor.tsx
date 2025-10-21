"use client"
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface Speaker {
  id: number;
  title: string;
  designation: string;
  imagePath: string;
}

const SpeakerEditor = () => {
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load speaker data
  useEffect(() => {
    fetch('/api/speakers')
      .then(res => res.json())
      .then(data => setSpeakers(data))
      .catch(err => console.error('Error loading speakers:', err));
  }, []);

  const handleSpeakerClick = (speaker: Speaker) => {
    setSelectedSpeaker({ ...speaker });
    setMessage(null);
  };

  const handleFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !selectedSpeaker) return;

    setUploading(true);
    setMessage(null);

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('path', selectedSpeaker.imagePath);

      const response = await fetch('/api/upload-image', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: '✅ Image uploaded successfully!' });
      } else {
        setMessage({ type: 'error', text: `❌ Error: ${data.error}` });
      }
    } catch (error) {
      setMessage({ type: 'error', text: '❌ Error uploading file' });
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    if (!selectedSpeaker) return;

    setSaving(true);
    setMessage(null);

    try {
      const response = await fetch('/api/speakers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedSpeaker),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: '✅ Speaker information saved successfully!' });
        // Update local state
        setSpeakers(speakers.map(s => s.id === selectedSpeaker.id ? selectedSpeaker : s));
      } else {
        setMessage({ type: 'error', text: `❌ Error: ${data.error}` });
      }
    } catch (error) {
      setMessage({ type: 'error', text: '❌ Error saving speaker data' });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#fff', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '48px', marginBottom: '10px', color: '#c6d306' }}>Speaker Editor</h1>
          <p style={{ fontSize: '18px', color: '#aaa' }}>Edit speaker photos, names, and titles</p>
        </div>

        <div style={{ background: '#1a1a1a', padding: '30px', borderRadius: '10px', marginBottom: '30px' }}>
          <h3 style={{ color: '#c6d306', marginBottom: '15px' }}>📝 Instructions</h3>
          <ol style={{ lineHeight: '1.8', color: '#ccc' }}>
            <li><strong>Click on any speaker</strong> below to select them</li>
            <li><strong>Edit the name and title</strong> in the form below</li>
            <li><strong>Click "Upload Photo"</strong> to change the speaker's photo</li>
            <li><strong>Click "Save Changes"</strong> to update the information</li>
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

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: selectedSpeaker ? '250px' : '50px'
        }}>
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              onClick={() => handleSpeakerClick(speaker)}
              style={{
                background: selectedSpeaker?.id === speaker.id ? '#2a2a2a' : '#1a1a1a',
                padding: '20px',
                borderRadius: '10px',
                cursor: 'pointer',
                border: selectedSpeaker?.id === speaker.id ? '2px solid #c6d306' : '2px solid transparent',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{
                position: 'relative',
                width: '100%',
                height: '250px',
                marginBottom: '15px',
                background: '#000',
                borderRadius: '5px',
                overflow: 'hidden'
              }}>
                <Image
                  src={`/team-images/${speaker.id}.png`}
                  alt={speaker.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  unoptimized
                />
              </div>
              <h3 style={{ fontSize: '18px', marginBottom: '5px', color: '#fff' }}>{speaker.title}</h3>
              <p style={{ fontSize: '14px', color: '#888' }}>{speaker.designation}</p>
            </div>
          ))}
        </div>

        {selectedSpeaker && (
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
              <h3 style={{ fontSize: '24px', color: '#c6d306', marginBottom: '20px' }}>
                Editing Speaker {selectedSpeaker.id}
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#ccc', fontSize: '14px' }}>
                    Speaker Name
                  </label>
                  <input
                    type="text"
                    value={selectedSpeaker.title}
                    onChange={(e) => setSelectedSpeaker({ ...selectedSpeaker, title: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: '#0a0a0a',
                      border: '1px solid #333',
                      borderRadius: '5px',
                      color: '#fff',
                      fontSize: '16px'
                    }}
                    placeholder="e.g., Nirdosh Kohra"
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '8px', color: '#ccc', fontSize: '14px' }}>
                    Title/Position
                  </label>
                  <input
                    type="text"
                    value={selectedSpeaker.designation}
                    onChange={(e) => setSelectedSpeaker({ ...selectedSpeaker, designation: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: '#0a0a0a',
                      border: '1px solid #333',
                      borderRadius: '5px',
                      color: '#fff',
                      fontSize: '16px'
                    }}
                    placeholder="e.g., Researcher & Philosopher"
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button
                  onClick={handleFileSelect}
                  disabled={uploading}
                  style={{
                    background: uploading ? '#666' : '#555',
                    color: '#fff',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '5px',
                    fontSize: '16px',
                    cursor: uploading ? 'not-allowed' : 'pointer',
                    fontWeight: 'bold',
                  }}
                >
                  {uploading ? 'Uploading...' : '📁 Upload Photo'}
                </button>

                <button
                  onClick={handleSave}
                  disabled={saving}
                  style={{
                    background: saving ? '#999' : '#c6d306',
                    color: '#fff',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '5px',
                    fontSize: '16px',
                    cursor: saving ? 'not-allowed' : 'pointer',
                    fontWeight: 'bold',
                  }}
                >
                  {saving ? 'Saving...' : '💾 Save Changes'}
                </button>

                <button
                  onClick={() => setSelectedSpeaker(null)}
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

export default SpeakerEditor;

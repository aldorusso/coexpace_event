import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  try {
    const teamDataPath = path.join(process.cwd(), 'src/data/TeamData.ts');
    const content = await fs.readFile(teamDataPath, 'utf-8');

    // Parse the speakers from home_1
    const speakers = [];
    const lines = content.split('\n');

    let inHome1 = false;
    let currentSpeaker: any = {};

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      if (line.includes('page: "home_1"')) {
        inHome1 = true;
      }

      if (inHome1) {
        if (line.startsWith('id:')) {
          currentSpeaker.id = parseInt(line.match(/\d+/)?.[0] || '0');
        }
        if (line.startsWith('title:')) {
          currentSpeaker.title = line.match(/"([^"]+)"/)?.[1] || '';
        }
        if (line.startsWith('designation:')) {
          currentSpeaker.designation = line.match(/"([^"]+)"/)?.[1] || '';
        }
        if (line.startsWith('thumb:')) {
          const thumbVar = line.match(/thumb:\s*(\w+)/)?.[1];
          // Find the import for this variable
          for (let j = 0; j < lines.length; j++) {
            if (lines[j].includes(`import ${thumbVar}`) && lines[j].includes('@/assets/img/team/')) {
              const imgPath = lines[j].match(/from\s+"([^"]+)"/)?.[1];
              if (imgPath) {
                currentSpeaker.imagePath = imgPath.replace('@/assets/img/team/', 'src/assets/img/team/');
              }
              break;
            }
          }
        }

        if (line === '},') {
          if (currentSpeaker.id && currentSpeaker.title) {
            speakers.push({ ...currentSpeaker });
          }
          currentSpeaker = {};
        }
      }

      // Stop when we reach home_2
      if (line.includes('page: "home_2"')) {
        break;
      }
    }

    return NextResponse.json(speakers);
  } catch (error) {
    console.error('Error reading speakers:', error);
    return NextResponse.json({ error: 'Failed to load speakers' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const speaker = await request.json();
    const teamDataPath = path.join(process.cwd(), 'src/data/TeamData.ts');
    let content = await fs.readFile(teamDataPath, 'utf-8');

    // Find and replace the speaker data
    const lines = content.split('\n');
    let inTargetSpeaker = false;
    let bracketCount = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.includes(`id: ${speaker.id},`) && line.includes('page: "home_1"')) {
        inTargetSpeaker = true;
        bracketCount = 1;
        continue;
      }

      if (inTargetSpeaker) {
        if (line.includes('title:')) {
          lines[i] = `      title: "${speaker.title}",`;
        }
        if (line.includes('designation:')) {
          lines[i] = `      designation: "${speaker.designation}",`;
        }

        if (line.includes('{')) bracketCount++;
        if (line.includes('}')) {
          bracketCount--;
          if (bracketCount === 0) {
            inTargetSpeaker = false;
          }
        }
      }
    }

    content = lines.join('\n');
    await fs.writeFile(teamDataPath, content, 'utf-8');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving speaker:', error);
    return NextResponse.json({ error: 'Failed to save speaker' }, { status: 500 });
  }
}

import { ToolDefinition } from '../types';

export const TOOLS_DATA: ToolDefinition[] = [
  // TOOL 1 — AI IMAGE PROMPT GENERATOR
  {
    id: 'image-prompt',
    slug: 'image-prompt',
    name: 'AI Image Prompt Generator',
    tagline: 'Craft hyper-detailed prompts for Midjourney, FLUX, Stable Diffusion & DALL-E',
    description: 'Generate production-ready image prompts with detailed camera, lighting, composition and artistic style parameters.',
    category: 'Image Tools',
    iconName: 'Sparkles',
    isPopular: true,
    outputType: 'text',
    fields: [
      { id: 'subject', label: 'Subject', type: 'text', placeholder: 'e.g. Cyberpunk samurai meditating in a rain-slicked alley', required: true },
      { id: 'character', label: 'Character Details', type: 'text', placeholder: 'e.g. Cybernetic arm with neon blue glowing circuits, stoic expression' },
      { id: 'environment', label: 'Environment', type: 'text', placeholder: 'e.g. Neo-Tokyo alleyway, wet cobblestones, glowing holographic billboards' },
      { 
        id: 'artStyle', 
        label: 'Art Style', 
        type: 'select', 
        options: ['Photorealistic 8K', 'Cinematic Movie Still', 'Anime / Studio Ghibli', '3D Unreal Engine 5 Render', 'Cyberpunk / Sci-Fi', 'Dark Fantasy Oil Painting', 'Minimalist Editorial Vector', 'Vintage 1970s Film 35mm', 'Retro Synthwave'],
        defaultValue: 'Cinematic Movie Still'
      },
      { 
        id: 'lighting', 
        label: 'Lighting', 
        type: 'select', 
        options: ['Volumetric Neon Rim Lighting', 'Golden Hour Warm Sunlight', 'Dark Moody Chiaroscuro', 'Studio Softbox Diffused', 'Bioluminescent Ambient Glow', 'Harsh Cyberpunk Backlight', 'Ethereal Foggy Dawn'],
        defaultValue: 'Volumetric Neon Rim Lighting'
      },
      { 
        id: 'cameraAngle', 
        label: 'Camera Angle', 
        type: 'select', 
        options: ['Eye Level Cinematic', 'Dramatic Low Angle Hero Shot', 'High Angle Bird-Eye View', 'Extreme Close-Up Macro', 'Dutch Angle Dynamic Tilt', 'Over-The-Shoulder Perspective'],
        defaultValue: 'Dramatic Low Angle Hero Shot'
      },
      { 
        id: 'cameraLens', 
        label: 'Camera Lens', 
        type: 'select', 
        options: ['35mm Anamorphic Prime', '85mm f/1.2 Portrait Prime', '16mm Ultra-Wide Angle', '50mm Standard Cine Lens', '100mm Macro Close-Up Lens'],
        defaultValue: '35mm Anamorphic Prime'
      },
      { 
        id: 'composition', 
        label: 'Composition', 
        type: 'select', 
        options: ['Rule of Thirds with Negative Space', 'Symmetrical Centered Framing', 'Dynamic Golden Spiral', 'Leading Lines Perspective', 'Tight Depth of Field with Bokeh'],
        defaultValue: 'Rule of Thirds with Negative Space'
      },
      { 
        id: 'mood', 
        label: 'Mood', 
        type: 'select', 
        options: ['Epic & Mystical', 'Gritty & Melancholic', 'Serene & Meditative', 'Intense & Action-Packed', 'Utopian & Euphoric', 'Spooky & Haunting'],
        defaultValue: 'Epic & Mystical'
      },
      { 
        id: 'aspectRatio', 
        label: 'Aspect Ratio', 
        type: 'select', 
        options: ['16:9 (Landscape / Wallpaper)', '9:16 (Story / TikTok / Shorts)', '1:1 (Square / Instagram)', '4:5 (Portrait Feed)', '21:9 (Ultrawide Cinema)'],
        defaultValue: '16:9 (Landscape / Wallpaper)'
      },
      { 
        id: 'quality', 
        label: 'Quality & Render Boosters', 
        type: 'select', 
        options: ['Masterpiece, 8k resolution, raytracing, HDR, highly detailed textures', 'Award-winning photo, Hasselblad H6D-100c, sharp focus', 'Fine art masterpiece, intricate micro-details, octane render', 'Crisp studio photography, color graded in DaVinci Resolve'],
        defaultValue: 'Masterpiece, 8k resolution, raytracing, HDR, highly detailed textures'
      },
      { id: 'additionalDetails', label: 'Additional Details', type: 'textarea', placeholder: 'e.g. Floating sakura petals in the air, reflection in puddles, subtle steam rising from tea' }
    ],
    samplePreset: {
      subject: 'Cyberpunk ronin warrior meditating with a plasma katana',
      character: 'Weathered mechanical mask, braided silver hair, glowing turquoise cybernetics',
      environment: 'Rooftop garden overlooking futuristic skyline in heavy pouring rain',
      artStyle: 'Cinematic Movie Still',
      lighting: 'Volumetric Neon Rim Lighting',
      cameraAngle: 'Dramatic Low Angle Hero Shot',
      cameraLens: '35mm Anamorphic Prime',
      composition: 'Rule of Thirds with Negative Space',
      mood: 'Epic & Mystical',
      aspectRatio: '16:9 (Landscape / Wallpaper)',
      quality: 'Masterpiece, 8k resolution, raytracing, HDR, highly detailed textures',
      additionalDetails: 'Atmospheric rain drops caught in motion, bokeh neon lights in distant skyscrapers'
    }
  },

  // TOOL 2 — AI VIDEO PROMPT GENERATOR
  {
    id: 'video-prompt',
    slug: 'video-prompt',
    name: 'AI Video Prompt Generator',
    tagline: 'Generate cinematic prompts for Sora, Runway Gen-3, Luma Dream Machine & Kling',
    description: 'Generate comprehensive cinematic video prompts covering camera motion, lighting, pacing, sound design, and character dynamics.',
    category: 'Video Tools',
    iconName: 'Video',
    isPopular: true,
    outputType: 'text',
    fields: [
      { id: 'sceneDescription', label: 'Scene Description', type: 'textarea', placeholder: 'Describe what happens in the video scene...', required: true },
      { id: 'characters', label: 'Characters', type: 'text', placeholder: 'e.g. A young female astronaut in an orange flight suit' },
      { id: 'characterActions', label: 'Character Actions', type: 'text', placeholder: 'e.g. Slowly wipes mist off helmet visor, steps backward in awe' },
      { id: 'facialExpressions', label: 'Facial Expressions & Emotion', type: 'text', placeholder: 'e.g. Widening eyes, awe-struck, slight parted lips, gentle breath' },
      { id: 'dialogue', label: 'Dialogue & Lip Sync', type: 'text', placeholder: 'e.g. "We are not alone anymore." (Clear natural lip movements)' },
      { 
        id: 'duration', 
        label: 'Duration', 
        type: 'select', 
        options: ['5 Seconds (High Intensity)', '10 Seconds (Standard Scene)', '15 Seconds (Narrative Beat)'],
        defaultValue: '10 Seconds (Standard Scene)'
      },
      { 
        id: 'cameraMovement', 
        label: 'Camera Movement', 
        type: 'select', 
        options: ['Slow Cinematic Dolly Forward', 'Smooth Orbiting 360-degree tracking shot', 'Dynamic Low-altitude Drone Flyby', 'Handheld documentary camera shake', 'Whip pan to reveal', 'Static locked-off shot with internal motion'],
        defaultValue: 'Slow Cinematic Dolly Forward'
      },
      { 
        id: 'cameraAngle', 
        label: 'Camera Angle', 
        type: 'select', 
        options: ['Medium Close-Up (Chest up)', 'Wide Establishing Shot', 'Dramatic Low Angle Hero View', 'Extreme Close-Up on eyes'],
        defaultValue: 'Medium Close-Up (Chest up)'
      },
      { id: 'environment', label: 'Environment', type: 'text', placeholder: 'e.g. Ancient crystalline cave on alien exoplanet with glowing flora' },
      { 
        id: 'lighting', 
        label: 'Lighting', 
        type: 'select', 
        options: ['Soft Bioluminescent Ambient Glow', 'Harsh Spotlight with Deep Shadows', 'Golden Sunset Horizon Flare', 'Sci-fi Neon Pulsing Hue'],
        defaultValue: 'Soft Bioluminescent Ambient Glow'
      },
      { id: 'soundEffects', label: 'Sound Effects (SFX)', type: 'text', placeholder: 'e.g. Muffled heavy breathing in helmet, gentle crystalline humming chime' },
      { id: 'music', label: 'Music / Background Score', type: 'text', placeholder: 'e.g. Deep analog synth drone evolving into orchestral swell' },
      { 
        id: 'aspectRatio', 
        label: 'Aspect Ratio', 
        type: 'select', 
        options: ['16:9 (Widescreen Cinema)', '9:16 (Vertical Reels/TikTok/Shorts)', '2.39:1 (Anamorphic Cinema)'],
        defaultValue: '16:9 (Widescreen Cinema)'
      }
    ],
    samplePreset: {
      sceneDescription: 'A lone space explorer discovers a pulsating crystal relic inside an asteroid cavern',
      characters: 'Female astronaut in high-tech exploration EVA suit with illuminated helmet HUD',
      characterActions: 'Reaches out gloved hand toward the hovering crystal; small particles float around her fingers',
      facialExpressions: 'Breathless awe, pupil dilation reflecting emerald light, subtle relieved smile',
      dialogue: '"Beacon signal confirmed... initiating scan."',
      duration: '10 Seconds (Standard Scene)',
      cameraMovement: 'Slow Cinematic Dolly Forward',
      cameraAngle: 'Medium Close-Up (Chest up)',
      environment: 'Subterranean ice cavern with iridescent quartz pillars and floating dust motes',
      lighting: 'Soft Bioluminescent Ambient Glow',
      soundEffects: 'Subtle servo motor hum of suit joints, low frequency harmonic resonance from crystal',
      music: 'Atmospheric Hans Zimmer style string pads with crystalline harp arpeggios',
      aspectRatio: '16:9 (Widescreen Cinema)'
    }
  },

  // TOOL 3 — IMAGE TO VIDEO PROMPT GENERATOR
  {
    id: 'image-to-video',
    slug: 'image-to-video',
    name: 'Image to Video Prompt Generator',
    tagline: 'Animate still images into seamless video while keeping characters 100% consistent',
    description: 'Transform static images into hyper-smooth video prompts with precise physical motion guidelines and character consistency locks.',
    category: 'Video Tools',
    iconName: 'Clapperboard',
    isPopular: false,
    outputType: 'text',
    fields: [
      { id: 'sceneDescription', label: 'Image / Initial Scene Description', type: 'textarea', placeholder: 'Describe the static starting image in detail...', required: true },
      { id: 'characterMovement', label: 'Character Movement', type: 'text', placeholder: 'e.g. Slowly turns head toward camera, raises right arm to shield eyes' },
      { id: 'facialExpression', label: 'Facial Expression Shift', type: 'text', placeholder: 'e.g. Shifts from neutral gaze to confident warm smile' },
      { id: 'bodyMovement', label: 'Body & Cloth Movement', type: 'text', placeholder: 'e.g. Trench coat flutters in gentle breeze, natural breathing chest movement' },
      { id: 'dialogue', label: 'Dialogue / Audio Cues', type: 'text', placeholder: 'e.g. Whispers softly: "It is time."' },
      { 
        id: 'duration', 
        label: 'Duration', 
        type: 'select', 
        options: ['4 Seconds (Micro Motion)', '6 Seconds (Smooth Loop)', '10 Seconds (Extended Motion)'],
        defaultValue: '6 Seconds (Smooth Loop)'
      },
      { 
        id: 'cameraMovement', 
        label: 'Camera Movement', 
        type: 'select', 
        options: ['Gentle Slow Push In (Zoom 1.2x)', 'Subtle Horizontal Parallax Pan Left-to-Right', 'Slight Orbiting Arc (15 degrees)', 'Locked Static Camera with Wind Physics'],
        defaultValue: 'Gentle Slow Push In (Zoom 1.2x)'
      },
      { 
        id: 'cameraDistance', 
        label: 'Camera Distance', 
        type: 'select', 
        options: ['Close-up Portrait', 'Medium Shot (Waist Up)', 'Full Body Shot', 'Wide Cinematic View'],
        defaultValue: 'Medium Shot (Waist Up)'
      },
      { 
        id: 'lighting', 
        label: 'Lighting Interaction', 
        type: 'select', 
        options: ['Sunbeams shifting through tree leaves', 'Neon signs reflecting on wet pavement', 'Flickering candlelight warmth', 'Static diffuse daylight'],
        defaultValue: 'Sunbeams shifting through tree leaves'
      },
      { id: 'environment', label: 'Environment Dynamics', type: 'text', placeholder: 'e.g. Falling autumn leaves drifting in background, light mist floating above river' },
      { id: 'soundEffects', label: 'Sound Effects', type: 'text', placeholder: 'e.g. Rustling leaves, distant birds chirping, soft river stream' }
    ],
    samplePreset: {
      sceneDescription: 'Portrait of an ancient elven archer standing by a mystical forest waterfall at sunrise',
      characterMovement: 'Slowly lowers golden bow, draws deep breath, turns head 30 degrees toward the viewer',
      facialExpression: 'Solemn vigilance shifting into calm recognition, eyes narrowing gently',
      bodyMovement: 'Emerald silk cloak sways organically with the waterfall breeze, braided hair strands move naturally',
      dialogue: 'Silent breath, no speaking',
      duration: '6 Seconds (Smooth Loop)',
      cameraMovement: 'Gentle Slow Push In (Zoom 1.2x)',
      cameraDistance: 'Medium Shot (Waist Up)',
      lighting: 'Sunbeams shifting through tree leaves',
      environment: 'Continuous cascading waterfall foam, shimmering rainbow mist, drifting golden pollen motes',
      soundEffects: 'Rush of pristine water, soft breeze through foliage, distant falcon cry'
    }
  },

  // TOOL 4 — YOUTUBE TITLE GENERATOR
  {
    id: 'youtube-title',
    slug: 'youtube-title',
    name: 'YouTube Title Generator',
    tagline: 'Generate high-CTR, SEO-optimized, click-worthy titles for your YouTube videos',
    description: 'Produce high-converting title sets categorized by Catchy, SEO-Friendly, Curiosity-Driven, and Short titles with instant copy buttons.',
    category: 'YouTube Tools',
    iconName: 'Youtube',
    isPopular: true,
    outputType: 'multi-titles',
    fields: [
      { id: 'topic', label: 'Video Topic', type: 'text', placeholder: 'e.g. How I built a profitable AI SaaS in 14 days without code', required: true },
      { 
        id: 'niche', 
        label: 'Channel Niche', 
        type: 'select', 
        options: ['Tech & AI', 'Business & Finance', 'Gaming', 'Fitness & Health', 'Education & Tutorials', 'Lifestyle & Vlogs', 'Entertainment', 'Travel'],
        defaultValue: 'Tech & AI'
      },
      { id: 'audience', label: 'Target Audience', type: 'text', placeholder: 'e.g. Solo founders, beginners, indie hackers, college students' },
      { 
        id: 'language', 
        label: 'Language', 
        type: 'select', 
        options: ['English', 'Urdu / Hindi', 'Spanish', 'French', 'Arabic', 'German'],
        defaultValue: 'English'
      },
      { 
        id: 'tone', 
        label: 'Tone', 
        type: 'select', 
        options: ['High Energy & Exciting', 'Professional & Authoritative', 'Curiosity & Mystery', 'Contrarian & Bold', 'Direct & Value-Packed'],
        defaultValue: 'Curiosity & Mystery'
      },
      { id: 'keywords', label: 'Keywords (Comma separated)', type: 'text', placeholder: 'e.g. AI tools, no code, passive income, build SaaS' }
    ],
    samplePreset: {
      topic: 'Building a profitable micro-SaaS with modern AI tools in 7 days',
      niche: 'Tech & AI',
      audience: 'Indie creators, developers, entrepreneurs',
      language: 'English',
      tone: 'Curiosity & Mystery',
      keywords: 'AI SaaS, No Code AI, Make Money Online, Micro SaaS 2026'
    }
  },

  // TOOL 5 — YOUTUBE DESCRIPTION GENERATOR
  {
    id: 'youtube-description',
    slug: 'youtube-description',
    name: 'YouTube Description Generator',
    tagline: 'Create rich, ranking YouTube descriptions with hooks, chapters, and hashtags',
    description: 'Generate high-ranking descriptions with natural keyword integration, call to action, resource links, and viral hashtags.',
    category: 'YouTube Tools',
    iconName: 'FileText',
    isPopular: true,
    outputType: 'text',
    fields: [
      { id: 'videoTitle', label: 'Video Title', type: 'text', placeholder: 'e.g. Top 10 FREE AI Tools That Will Blow Your Mind in 2026', required: true },
      { id: 'videoTopic', label: 'Video Topic & Core Message', type: 'textarea', placeholder: 'Explain what happens in the video and key takeaways...' },
      { id: 'keywords', label: 'Target Keywords', type: 'text', placeholder: 'e.g. best ai tools, free ai prompt generator, productivity ai' },
      { 
        id: 'channelNiche', 
        label: 'Channel Niche', 
        type: 'select', 
        options: ['Technology & AI', 'Digital Marketing', 'Creative Arts & Video Editing', 'Self Improvement', 'Software Development'],
        defaultValue: 'Technology & AI'
      },
      { id: 'targetAudience', label: 'Target Audience', type: 'text', placeholder: 'e.g. Content creators, YouTubers, online business owners' }
    ],
    samplePreset: {
      videoTitle: 'Top 7 FREE AI Tools Every Creator Needs in 2026 (No Subscription Required)',
      videoTopic: 'Reviewing hidden gem AI websites for image generation, automated video editing, scriptwriting, and thumbnail ideas that cost $0.',
      keywords: 'free AI tools, creator productivity, ai video generator, best ai websites 2026',
      channelNiche: 'Technology & AI',
      targetAudience: 'YouTubers, TikTok creators, and freelance designers'
    }
  },

  // TOOL 6 — FACEBOOK CAPTION GENERATOR
  {
    id: 'facebook-caption',
    slug: 'facebook-caption',
    name: 'Facebook Caption Generator',
    tagline: 'Generate high-engagement Facebook posts, stories, announcements and reels captions',
    description: 'Produce engaging Facebook captions tailored with short hooks, storytelling bodies, engagement questions, and hashtags.',
    category: 'Social Media Tools',
    iconName: 'Share2',
    isPopular: false,
    outputType: 'sections',
    fields: [
      { id: 'topic', label: 'Post Topic / Message', type: 'textarea', placeholder: 'What are you sharing? (e.g. A personal milestone, tip, or business launch)', required: true },
      { 
        id: 'postType', 
        label: 'Post Type', 
        type: 'select', 
        options: ['Photo / Video Post', 'Story / Reel Caption', 'Major Milestone Announcement', 'Thought Leadership & Storytelling', 'Question / Discussion Starter', 'Product / Service Promotion'],
        defaultValue: 'Thought Leadership & Storytelling'
      },
      { 
        id: 'language', 
        label: 'Language', 
        type: 'select', 
        options: ['English', 'Urdu / Roman Urdu', 'Spanish', 'French', 'Hindi'],
        defaultValue: 'English'
      },
      { 
        id: 'tone', 
        label: 'Tone', 
        type: 'select', 
        options: ['Inspirational & Warm', 'Humorous & Relatable', 'Direct & Professional', 'Conversational & Friendly', 'Urgent & Promotional'],
        defaultValue: 'Inspirational & Warm'
      },
      { id: 'audience', label: 'Target Audience', type: 'text', placeholder: 'e.g. Small business owners, creative freelancers, tech enthusiasts' }
    ],
    samplePreset: {
      topic: 'Celebrating 1 year since leaving my 9-to-5 job to become a full-time creator using AI tools',
      postType: 'Thought Leadership & Storytelling',
      language: 'English',
      tone: 'Inspirational & Warm',
      audience: 'Aspiring creators, entrepreneurs, remote workers'
    }
  },

  // TOOL 7 — TIKTOK CAPTION & HASHTAG GENERATOR
  {
    id: 'tiktok-caption',
    slug: 'tiktok-caption',
    name: 'TikTok Caption & Hashtag Generator',
    tagline: 'Viral-style captions, retention hooks, and trending FYP hashtags for TikTok & Reels',
    description: 'Craft punchy, high-retention video captions paired with viral hashtags designed to land on the For You Page.',
    category: 'Social Media Tools',
    iconName: 'Flame',
    isPopular: true,
    outputType: 'sections',
    fields: [
      { id: 'videoTopic', label: 'Video Topic', type: 'text', placeholder: 'e.g. 3 secret AI websites that feel illegal to know', required: true },
      { 
        id: 'niche', 
        label: 'Niche', 
        type: 'select', 
        options: ['Tech & Gadgets', 'Life Hacks & Tips', 'Comedy & Skits', 'Fitness & Diet', 'Fashion & Beauty', 'Education & Finance', 'Gaming'],
        defaultValue: 'Tech & Gadgets'
      },
      { 
        id: 'language', 
        label: 'Language', 
        type: 'select', 
        options: ['English', 'Urdu / Roman Urdu', 'Spanish', 'Portuguese', 'Hindi'],
        defaultValue: 'English'
      },
      { id: 'audience', label: 'Target Audience', type: 'text', placeholder: 'e.g. Gen Z students, side hustlers, creators' },
      { 
        id: 'tone', 
        label: 'Tone', 
        type: 'select', 
        options: ['Punchy & Viral (High Hook)', 'Relatable & Funny', 'Curious & Mind-Blowing', 'Helpful & Straightforward'],
        defaultValue: 'Punchy & Viral (High Hook)'
      }
    ],
    samplePreset: {
      videoTopic: 'How to make a cinematic movie trailer in 5 minutes using free AI video tools',
      niche: 'Tech & Gadgets',
      language: 'English',
      audience: 'Filmmakers, video editors, TikTok creators',
      tone: 'Punchy & Viral (High Hook)'
    }
  },

  // TOOL 8 — AI STORY GENERATOR
  {
    id: 'story-generator',
    slug: 'story-generator',
    name: 'AI Story Generator',
    tagline: 'Generate rich, multi-scene creative stories with characters, actions and dialogue',
    description: 'Compose complete multi-scene fictional narratives with rich scene descriptions, character motives, actions, and natural dialogue.',
    category: 'Writing Tools',
    iconName: 'BookOpen',
    isPopular: true,
    outputType: 'story',
    fields: [
      { id: 'storyTopic', label: 'Story Topic / Premise', type: 'textarea', placeholder: 'What is the story about? (e.g. An old clockmaker discovers a clock that ticks backwards)', required: true },
      { 
        id: 'genre', 
        label: 'Genre', 
        type: 'select', 
        options: ['Sci-Fi / Cyberpunk', 'Mystery / Thriller', 'Fantasy & Mythic', 'Adventure & Exploration', 'Drama / Emotional', 'Horror & Suspense', 'Comedy'],
        defaultValue: 'Sci-Fi / Cyberpunk'
      },
      { id: 'characters', label: 'Characters', type: 'text', placeholder: 'e.g. Aaron (reclusive chronosmith), Lyra (time investigator from the year 2140)' },
      { 
        id: 'numberOfScenes', 
        label: 'Number of Scenes', 
        type: 'select', 
        options: ['3 Scenes (Short Story)', '4 Scenes (Standard Narrative)', '5 Scenes (Extended Plot Arc)'],
        defaultValue: '4 Scenes (Standard Narrative)'
      },
      { 
        id: 'language', 
        label: 'Language', 
        type: 'select', 
        options: ['English', 'Urdu', 'Roman Urdu', 'Spanish', 'French'],
        defaultValue: 'English'
      },
      { 
        id: 'storyLength', 
        label: 'Story Length / Detail', 
        type: 'select', 
        options: ['Concise (Quick read, ~400 words)', 'Standard (~750 words)', 'Detailed (~1200 words)'],
        defaultValue: 'Standard (~750 words)'
      },
      { 
        id: 'tone', 
        label: 'Tone', 
        type: 'select', 
        options: ['Cinematic & Suspenseful', 'Dark & Atmospheric', 'Heartwarming & Poetic', 'Fast-Paced & Energetic'],
        defaultValue: 'Cinematic & Suspenseful'
      }
    ],
    samplePreset: {
      storyTopic: 'An astronomer receives an encrypted radio melody from Saturn that matches an ancient lullaby sung by her late grandmother',
      genre: 'Sci-Fi / Cyberpunk',
      characters: 'Dr. Elena Vance (radio astrophysicist), Kael (station AI assistant)',
      numberOfScenes: '4 Scenes (Standard Narrative)',
      language: 'English',
      storyLength: 'Standard (~750 words)',
      tone: 'Cinematic & Suspenseful'
    }
  },

  // TOOL 9 — CHARACTER PROMPT GENERATOR
  {
    id: 'character-prompt',
    slug: 'character-prompt',
    name: 'Character Prompt Generator',
    tagline: 'Maintain 100% character consistency across multiple AI images and videos',
    description: 'Design comprehensive character prompt sheets with strict facial seeds, wardrobe anchors, and consistency guidelines for recurring characters.',
    category: 'Creator Tools',
    iconName: 'UserCheck',
    isPopular: true,
    outputType: 'text',
    fields: [
      { 
        id: 'characterType', 
        label: 'Character Type / Archetype', 
        type: 'select', 
        options: ['Cyberpunk Rebel / Hacker', 'Fantasy Mage / Warrior', 'Modern Urban Professional', 'Post-Apocalyptic Survivor', 'Anime Hero / Protagonist', 'Detective / Investigator', 'Space Fleet Commander'],
        defaultValue: 'Cyberpunk Rebel / Hacker'
      },
      { id: 'age', label: 'Age', type: 'text', placeholder: 'e.g. 26 years old' },
      { 
        id: 'gender', 
        label: 'Gender', 
        type: 'select', 
        options: ['Female', 'Male', 'Non-binary / Androgynous', 'Android / Synthetic'],
        defaultValue: 'Female'
      },
      { id: 'appearance', label: 'Overall Appearance', type: 'text', placeholder: 'e.g. Athletic build, olive skin, distinct scar over left eyebrow' },
      { id: 'face', label: 'Face & Hair Details', type: 'text', placeholder: 'e.g. Sharp jawline, almond-shaped hazel eyes, undercut with turquoise streaks' },
      { id: 'body', label: 'Body Features', type: 'text', placeholder: 'e.g. 5 foot 8, lean runner physique, geometric circuit tattoo on right forearm' },
      { id: 'clothing', label: 'Clothing & Wardrobe (Consistency Anchor)', type: 'text', placeholder: 'e.g. Weathered dark leather jacket with orange interior lining, combat cargo pants' },
      { id: 'accessories', label: 'Accessories', type: 'text', placeholder: 'e.g. High-tech AR visor on forehead, fingerless gloves, silver audio pendant' },
      { id: 'personality', label: 'Personality & Expression', type: 'text', placeholder: 'e.g. Fiercely observant, smirking confidence, calm under pressure' },
      { id: 'environment', label: 'Primary Environment', type: 'text', placeholder: 'e.g. Neon lit night bazaar, holographic arcade alley' },
      { 
        id: 'artStyle', 
        label: 'Art Style', 
        type: 'select', 
        options: ['Cinematic Photorealism', 'Unreal Engine 5 Metahuman 8K', 'Modern Anime Keyframe', 'Stylized 3D Pixar Style', 'Dark Fantasy Concept Art'],
        defaultValue: 'Cinematic Photorealism'
      },
      { 
        id: 'lighting', 
        label: 'Lighting Setup', 
        type: 'select', 
        options: ['Dual-tone Neon Rim Light (Cyan / Magenta)', 'Warm Golden Hour Natural Light', 'Dark Studio Chiaroscuro', 'Soft Diffuse Natural Daylight'],
        defaultValue: 'Dual-tone Neon Rim Light (Cyan / Magenta)'
      },
      { 
        id: 'camera', 
        label: 'Camera Setup', 
        type: 'select', 
        options: ['85mm Portrait Cine Lens, shallow depth of field, f/1.4', '50mm Medium Character Shot, neutral perspective', '35mm Wide Dynamic Angle'],
        defaultValue: '85mm Portrait Cine Lens, shallow depth of field, f/1.4'
      }
    ],
    samplePreset: {
      characterType: 'Cyberpunk Rebel / Hacker',
      age: '24 years old',
      gender: 'Female',
      appearance: 'Athletic, sharp features, luminescent freckles that faintly glow in darkness',
      face: 'High cheekbones, intense silver-grey eyes, asymmetrical jet-black bob with electric cyan fringe',
      body: 'Slender and agile, chrome cybernetic prosthetic left hand with subtle status LED',
      clothing: 'Oversized charcoal bomber jacket with yellow safety pull-tabs, tactical matte pants, utility boots',
      accessories: 'Clear acrylic holographic visor worn as headband, modular neck-mounted mic',
      personality: 'Defiant, razor-sharp intellect, wry smirk',
      environment: 'Dense underground data haven with server stacks and optical fiber cables',
      artStyle: 'Cinematic Photorealism',
      lighting: 'Dual-tone Neon Rim Light (Cyan / Magenta)',
      camera: '85mm Portrait Cine Lens, shallow depth of field, f/1.4'
    }
  },

  // TOOL 10 — AI BLOG WRITER
  {
    id: 'blog-writer',
    slug: 'blog-writer',
    name: 'AI Blog Writer',
    tagline: 'Generate complete, SEO-optimized blog posts with headings, intro, conclusion & meta',
    description: 'Write comprehensive, structured blog articles featuring engaging hooks, structured H2/H3 headings, actionable takeaways, meta description, and keywords.',
    category: 'Writing Tools',
    iconName: 'PenTool',
    isPopular: true,
    outputType: 'sections',
    fields: [
      { id: 'topic', label: 'Blog Article Topic', type: 'text', placeholder: 'e.g. The Complete Guide to Monetizing Short-Form Video in 2026', required: true },
      { id: 'keywords', label: 'Target SEO Keywords', type: 'text', placeholder: 'e.g. short form video monetization, youtube shorts income, tiktok creator tips' },
      { 
        id: 'language', 
        label: 'Language', 
        type: 'select', 
        options: ['English', 'Urdu', 'Spanish', 'French', 'German'],
        defaultValue: 'English'
      },
      { 
        id: 'tone', 
        label: 'Tone', 
        type: 'select', 
        options: ['Actionable & Authoritative', 'Casual & Conversational', 'Data-Driven & Analytical', 'Inspiring & Motivational'],
        defaultValue: 'Actionable & Authoritative'
      },
      { 
        id: 'articleLength', 
        label: 'Article Length', 
        type: 'select', 
        options: ['Quick Read (~600 words)', 'Standard Comprehensive (~1200 words)', 'In-Depth Ultimate Guide (~2000 words)'],
        defaultValue: 'Standard Comprehensive (~1200 words)'
      },
      { id: 'targetAudience', label: 'Target Audience', type: 'text', placeholder: 'e.g. Content creators, digital marketers, entrepreneurs' }
    ],
    samplePreset: {
      topic: 'How Creators Can Build a 6-Figure Income Stream Using AI Workflow Automation in 2026',
      keywords: 'creator automation, AI workflows, passive creator income, AI tools for bloggers',
      language: 'English',
      tone: 'Actionable & Authoritative',
      articleLength: 'Standard Comprehensive (~1200 words)',
      targetAudience: 'Digital creators, solo business owners, YouTubers'
    }
  },

  // TOOL 11 — URDU / ROMAN URDU TO ENGLISH PROMPT
  {
    id: 'urdu-to-english',
    slug: 'urdu-to-english',
    name: 'Urdu / Roman Urdu to English Prompt',
    tagline: 'Apni Urdu ya Roman Urdu soch ko professional English AI prompt mein convert karein',
    description: 'Write your creative concept in Urdu, Roman Urdu, or simple English. Nomi AI transforms it into an expert English prompt while preserving your original story and imagination.',
    category: 'Creator Tools',
    iconName: 'Languages',
    isPopular: true,
    outputType: 'text',
    fields: [
      { 
        id: 'sourceText', 
        label: 'Apna Idea / Concept Likhein (Urdu, Roman Urdu, or English)', 
        type: 'textarea', 
        placeholder: 'e.g. Ek purani haveli hai raat ke waqt, barish ho rahi hai aur khirki mein ek choti si larki hath mein mombatti le kar khari hai. Bahar bijli chamak rahi hai.', 
        required: true 
      },
      { 
        id: 'targetAiTool', 
        label: 'Target AI Tool / Medium', 
        type: 'select', 
        options: ['AI Image Generator (Midjourney / FLUX / Stable Diffusion)', 'AI Video Generator (Sora / Runway / Luma / Kling)', 'General Creative Concept / Storyboard'],
        defaultValue: 'AI Image Generator (Midjourney / FLUX / Stable Diffusion)'
      },
      { 
        id: 'outputStyle', 
        label: 'Style / Visual Quality', 
        type: 'select', 
        options: ['Cinematic & Photorealistic 8K', 'Dark Moody & Atmospheric', 'Fantasy & Magical', 'Anime / Studio Ghibli Aesthetic'],
        defaultValue: 'Cinematic & Photorealistic 8K'
      }
    ],
    samplePreset: {
      sourceText: 'Lahore ke purane shehar ki ek tang gali hai, shaam ka waqt hai aur barish ke baad geeli sarak par neon dukanon ki roshni chamak rahi hai. Ek chai wala garma garam chai bana raha hai aur uski dukan se dhuwaan nikal raha hai.',
      targetAiTool: 'AI Image Generator (Midjourney / FLUX / Stable Diffusion)',
      outputStyle: 'Cinematic & Photorealistic 8K'
    }
  },

  // TOOL 12 — HASHTAG GENERATOR
  {
    id: 'hashtag-generator',
    slug: 'hashtag-generator',
    name: 'Hashtag Generator',
    tagline: 'Generate high-reach, viral hashtags for YouTube, TikTok, Instagram & Facebook',
    description: 'Get platform-optimized hashtag clusters categorized by viral, niche, and high-engagement reach with one-click copy.',
    category: 'Social Media Tools',
    iconName: 'Hash',
    isPopular: false,
    outputType: 'hashtags',
    fields: [
      { id: 'topic', label: 'Topic or Keyword', type: 'text', placeholder: 'e.g. AI video generation for creators', required: true },
      { 
        id: 'platform', 
        label: 'Primary Platform', 
        type: 'select', 
        options: ['All Platforms (Multi-Network)', 'YouTube (Shorts & Longform)', 'TikTok (FYP & Viral)', 'Instagram (Reels & Feed)', 'Facebook (Page & Group)'],
        defaultValue: 'All Platforms (Multi-Network)'
      },
      { id: 'niche', label: 'Niche / Industry', type: 'text', placeholder: 'e.g. Artificial Intelligence, Digital Creator, Tech Reviews' },
      { 
        id: 'language', 
        label: 'Language', 
        type: 'select', 
        options: ['English', 'Urdu / Hindi', 'Global Multilingual'],
        defaultValue: 'English'
      }
    ],
    samplePreset: {
      topic: 'AI video generation and cinematic animation for creators',
      platform: 'All Platforms (Multi-Network)',
      niche: 'Artificial Intelligence & Filmmaking',
      language: 'English'
    }
  }
];

export const CATEGORIES = [
  'All Tools',
  'Writing Tools',
  'Image Tools',
  'Video Tools',
  'YouTube Tools',
  'Social Media Tools',
  'Creator Tools'
] as const;

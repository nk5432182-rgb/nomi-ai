/**
 * Nomi AI - Prompt & Output Generation Engine
 * Supports Gemini 3.8 Flash API server-side execution and intelligent local synthesis fallback.
 */

export interface GenerateRequest {
  toolId: string;
  inputs: Record<string, string | number>;
}

export function buildGeminiPrompt(toolId: string, inputs: Record<string, string | number>): { systemInstruction: string; userPrompt: string } {
  switch (toolId) {
    case 'image-prompt':
      return {
        systemInstruction: `You are an elite AI Prompt Engineer for Midjourney, FLUX.1, and Stable Diffusion XL. You create hyper-detailed, evocative image prompts that produce breathtaking visuals.
Format output cleanly:
First, output the primary master prompt in a single cohesive, highly descriptive paragraph combining subject, characters, environment, lighting, camera lens, composition, mood, and aesthetic modifiers.
Then, on separate clearly labeled lines, provide:
-- Aspect Ratio: [ratio]
-- Stylize / Quality Modifiers: [modifiers]
-- Negative Prompt (recommended exclusions): [negative prompt]`,
        userPrompt: `Generate a professional AI image generation prompt from these details:
Subject: ${inputs.subject || 'Creative visual concept'}
Character: ${inputs.character || 'Not specified'}
Environment: ${inputs.environment || 'Detailed backdrop'}
Art Style: ${inputs.artStyle || 'Cinematic'}
Lighting: ${inputs.lighting || 'Volumetric'}
Camera Angle: ${inputs.cameraAngle || 'Eye level'}
Camera Lens: ${inputs.cameraLens || '35mm anamorphic'}
Composition: ${inputs.composition || 'Rule of thirds'}
Mood: ${inputs.mood || 'Epic'}
Aspect Ratio: ${inputs.aspectRatio || '16:9'}
Quality: ${inputs.quality || 'Masterpiece 8k'}
Additional Details: ${inputs.additionalDetails || 'None'}`
      };

    case 'video-prompt':
      return {
        systemInstruction: `You are an award-winning cinematic director and AI video prompt engineer for Sora, Runway Gen-3, Luma Dream Machine, and Kling.
You must generate a structured cinematic AI video prompt that clearly specifies:
1. SCENE DESCRIPTION & ATMOSPHERE
2. CHARACTERS & WARDROBE
3. CHARACTER ACTIONS & MOVEMENT
4. FACIAL EXPRESSIONS & EMOTION
5. DIALOGUE & LIP SYNC (exact spoken words, natural pauses)
6. CAMERA DIRECTION (movement, focal length, angle)
7. LIGHTING & ENVIRONMENT
8. SOUND EFFECTS (SFX) & MUSIC
9. TIMING & PACING
10. ENDING ACTION / TRANSITION BEAT`,
        userPrompt: `Generate an AI video prompt from these inputs:
Scene Description: ${inputs.sceneDescription}
Characters: ${inputs.characters || 'Main character'}
Character Actions: ${inputs.characterActions || 'Dynamic motion'}
Facial Expressions: ${inputs.facialExpressions || 'Realistic expression'}
Dialogue: ${inputs.dialogue || 'Natural line'}
Duration: ${inputs.duration || '10s'}
Camera Movement: ${inputs.cameraMovement || 'Slow dolly'}
Camera Angle: ${inputs.cameraAngle || 'Medium close up'}
Environment: ${inputs.environment || 'Atmospheric setting'}
Lighting: ${inputs.lighting || 'Cinematic'}
Sound Effects: ${inputs.soundEffects || 'Immersive environmental audio'}
Music: ${inputs.music || 'Atmospheric score'}
Aspect Ratio: ${inputs.aspectRatio || '16:9'}`
      };

    case 'image-to-video':
      return {
        systemInstruction: `You are a specialist in animating still images using modern image-to-video AI tools (Veo, Runway, Luma, Pika, Kling).
Generate a precise motion prompt based on the provided still image description.
You MUST include two distinct sections:
### 1. MOTION PROMPT
(Detailed physics, camera pan/zoom, subtle character micro-expressions, clothing dynamics, atmospheric drift, and sound design)
### 2. CHARACTER CONSISTENCY INSTRUCTIONS
(Exact rules to ensure the character's facial features, clothing, lighting consistency, and anatomical integrity remain 100% stable without morphing or distortion).`,
        userPrompt: `Image / Initial Scene: ${inputs.sceneDescription}
Character Movement: ${inputs.characterMovement || 'Natural subtle movement'}
Facial Expression: ${inputs.facialExpression || 'Engaged gaze'}
Body Movement: ${inputs.bodyMovement || 'Gentle realistic posture shift'}
Dialogue: ${inputs.dialogue || 'Silent breath'}
Duration: ${inputs.duration || '6s'}
Camera Movement: ${inputs.cameraMovement || 'Gentle push in'}
Camera Distance: ${inputs.cameraDistance || 'Medium shot'}
Lighting Interaction: ${inputs.lighting || 'Dynamic light rays'}
Environment Dynamics: ${inputs.environment || 'Subtle particle drift'}
Sound Effects: ${inputs.soundEffects || 'Ambient sound'}`
      };

    case 'youtube-title':
      return {
        systemInstruction: `You are a top YouTube viral strategist and CTR specialist.
Generate compelling YouTube titles categorized into exactly four groups:
### CATCHY TITLES
(High emotional intrigue, power words, high click-through rate)
### SEO-FRIENDLY TITLES
(Targeting search intent, keyword rich, ranking potential)
### CURIOSITY-BASED TITLES
(Irresistible curiosity gap, open loop psychology)
### SHORT & PUNCHY TITLES
(Under 50 characters, mobile-friendly, instant comprehension)

Provide 5 titles under each category. Number them cleanly (1 to 5).`,
        userPrompt: `Topic: ${inputs.topic}
Niche: ${inputs.niche || 'Tech'}
Target Audience: ${inputs.audience || 'Creators'}
Language: ${inputs.language || 'English'}
Tone: ${inputs.tone || 'Exciting'}
Keywords: ${inputs.keywords || 'None specified'}`
      };

    case 'youtube-description':
      return {
        systemInstruction: `You are a veteran YouTube growth consultant. Write an SEO-optimized, reader-friendly YouTube video description.
Structure:
1. HOOK / FIRST 2 LINES (Crucial for search preview snippet)
2. COMPREHENSIVE VIDEO SUMMARY & KEY TAKEAWAYS (Naturally integrating keywords without keyword stuffing)
3. CHAPTERS / TIMESTAMPS TEMPLATE
4. CALL TO ACTION & COMMUNITY ENGAGEMENT (Like, subscribe, comment prompt)
5. RELEVANT LINKS & RESOURCES PLACEHOLDER
6. TARGET HASHTAGS (3-5 high-converting hashtags)`,
        userPrompt: `Video Title: ${inputs.videoTitle}
Video Topic: ${inputs.videoTopic || inputs.videoTitle}
Target Keywords: ${inputs.keywords || ''}
Channel Niche: ${inputs.channelNiche || 'General'}
Target Audience: ${inputs.targetAudience || 'Viewers'}`
      };

    case 'facebook-caption':
      return {
        systemInstruction: `You are a social media copywriter specializing in Facebook algorithm engagement.
Generate engaging Facebook content with four distinct sections:
### 1. SHORT CAPTION
(Punchy 1-2 sentence hook, fast to read on mobile feed)
### 2. LONG STORYTELLING CAPTION
(Emotional or insightful storytelling post with line breaks, value delivery, and relatable narrative)
### 3. CALL TO ACTION (CTA)
(Interactive question or clear next action to trigger comments and shares)
### 4. RELEVANT HASHTAGS
(Targeted Facebook hashtags)`,
        userPrompt: `Topic: ${inputs.topic}
Post Type: ${inputs.postType || 'Photo/Video'}
Language: ${inputs.language || 'English'}
Tone: ${inputs.tone || 'Friendly'}
Audience: ${inputs.audience || 'General'}`
      };

    case 'tiktok-caption':
      return {
        systemInstruction: `You are a TikTok and Reels viral script doctor.
Format output into three distinct sections:
### 1. VIRAL CAPTION IDEAS (3 Options)
- Option 1 (Curiosity Hook)
- Option 2 (Relatable / Humorous)
- Option 3 (Controversial / Bold statement)
### 2. SHORT VIDEO DESCRIPTION
(Concise 1-sentence on-screen style caption)
### 3. TRENDING & NICHE HASHTAGS
(Categorized by Viral FYP tags, Niche authority tags, and Community tags)`,
        userPrompt: `Video Topic: ${inputs.videoTopic}
Niche: ${inputs.niche || 'General'}
Language: ${inputs.language || 'English'}
Audience: ${inputs.audience || 'General'}
Tone: ${inputs.tone || 'Viral'}`
      };

    case 'story-generator':
      return {
        systemInstruction: `You are a master fiction author and screenwriter.
Generate an engaging, complete multi-scene story with rich sensory details, memorable characters, and dialogue.
Structure:
# [STORY TITLE]

[Brief Premise / Synopsis]

### Scene 1: [Scene Title]
- Scene Description: (Setting, atmosphere, sensory cues)
- Characters: (Who is present)
- Actions: (What physically happens)
- Dialogue: (Spoken lines with emotion tags)

(Repeat the exact same format for each scene based on the requested number of scenes).`,
        userPrompt: `Story Topic: ${inputs.storyTopic}
Genre: ${inputs.genre || 'Sci-Fi'}
Characters: ${inputs.characters || 'Protagonist'}
Number of Scenes: ${inputs.numberOfScenes || '4 Scenes'}
Language: ${inputs.language || 'English'}
Story Length: ${inputs.storyLength || 'Standard'}
Tone: ${inputs.tone || 'Cinematic'}`
      };

    case 'character-prompt':
      return {
        systemInstruction: `You are a character design director for AI digital art and films.
Create two distinct sections:
### 1. MASTER CHARACTER PROMPT
(Detailed physical appearance, facial seed description, hairstyle, clothing, signature accessories, posture, lighting, and camera lens)
### 2. CHARACTER CONSISTENCY INSTRUCTIONS
(Step-by-step practical guide on how to keep this exact character 100% consistent across different scenes, poses, angles, and generator seeds).`,
        userPrompt: `Character Type: ${inputs.characterType}
Age: ${inputs.age || '25'}
Gender: ${inputs.gender || 'Female'}
Appearance: ${inputs.appearance || 'Athletic'}
Face & Hair: ${inputs.face || 'Detailed'}
Body Features: ${inputs.body || 'Distinctive'}
Clothing (Anchor): ${inputs.clothing || 'Signature outfit'}
Accessories: ${inputs.accessories || 'Signature accessory'}
Personality: ${inputs.personality || 'Confident'}
Environment: ${inputs.environment || 'Studio'}
Art Style: ${inputs.artStyle || 'Photorealistic'}
Lighting: ${inputs.lighting || 'Studio lighting'}
Camera: ${inputs.camera || '85mm portrait'}`
      };

    case 'blog-writer':
      return {
        systemInstruction: `You are a professional content strategist and senior SEO copywriter.
Generate a complete, high-ranking, engaging blog post formatted in markdown.
Include:
1. SEO TITLE
2. META DESCRIPTION (150-160 chars)
3. TARGET KEYWORDS
4. ENGAGING INTRODUCTION (with hook and clear problem statement)
5. STRUCTURED HEADINGS (H2 and H3) with thorough, high-value, actionable paragraphs
6. ACTIONABLE CONCLUSION / TAKEAWAYS
7. HASHTAGS`,
        userPrompt: `Topic: ${inputs.topic}
Keywords: ${inputs.keywords || 'None'}
Language: ${inputs.language || 'English'}
Tone: ${inputs.tone || 'Authoritative'}
Article Length: ${inputs.articleLength || 'Standard'}
Target Audience: ${inputs.targetAudience || 'General'}`
      };

    case 'urdu-to-english':
      return {
        systemInstruction: `You are an expert bilingual Urdu/Roman Urdu to English creative prompt translator.
Your mission:
The user will provide an idea in Urdu (اردو), Roman Urdu (e.g. "ek larka barish me cycle chala raha hai"), or simple conversational English.
Convert their concept into a stunning, production-ready English prompt for modern AI generators.
CRITICAL RULES:
1. PRESERVE THE ORIGINAL MEANING, emotional heart, and unique cultural/environmental context of their story.
2. DO NOT alter their core creative concept.
3. Enhance it with world-class professional prompt terminology: lighting, atmosphere, cinematic lens, artistic mood, rendering clarity, and depth.
Output format:
### 🌟 Professional English AI Prompt
[The full expanded master prompt]

### 💡 Concept Translation Breakdown
- Original Core Meaning Preserved: [Brief explanation of how the essence was captured]
- Recommended AI Settings: [Aspect ratio, style model, lighting tips]`,
        userPrompt: `User's Input (Urdu / Roman Urdu / English):
"${inputs.sourceText}"

Target AI Tool: ${inputs.targetAiTool || 'AI Image Generator'}
Visual Style: ${inputs.outputStyle || 'Cinematic & Photorealistic 8K'}`
      };

    case 'hashtag-generator':
      return {
        systemInstruction: `You are a social media growth strategist.
Generate targeted, high-performing hashtags optimized for platform algorithms.
Structure output with clear sections:
### 📺 YouTube (Shorts & Longform)
### 🎵 TikTok (FYP & Viral)
### 📸 Instagram (Reels & Feed)
### 👥 Facebook (Community & Pages)
### 🚀 Viral & Trending (Top Volume)
### 🎯 Niche & Targeted (High Engagement)`,
        userPrompt: `Topic: ${inputs.topic}
Platform: ${inputs.platform || 'All Platforms'}
Niche: ${inputs.niche || 'General'}
Language: ${inputs.language || 'English'}`
      };

    default:
      return {
        systemInstruction: 'You are a helpful AI tools assistant for content creators.',
        userPrompt: `Generate creative output for: ${JSON.stringify(inputs)}`
      };
  }
}

/**
 * High-grade intelligent deterministic generator fallback.
 * Ensures the app works 100% reliably even when an external API key is missing or offline.
 */
export function generateLocalFallback(toolId: string, inputs: Record<string, string | number>): string {
  switch (toolId) {
    case 'image-prompt': {
      const subject = inputs.subject || 'A mystical creator crafting digital worlds';
      const character = inputs.character ? `, character features: ${inputs.character}` : '';
      const environment = inputs.environment ? `, set in ${inputs.environment}` : '';
      const artStyle = inputs.artStyle || 'Cinematic Movie Still';
      const lighting = inputs.lighting || 'Volumetric Neon Rim Lighting';
      const cameraAngle = inputs.cameraAngle || 'Dramatic Low Angle Hero Shot';
      const cameraLens = inputs.cameraLens || '35mm Anamorphic Prime';
      const composition = inputs.composition || 'Rule of Thirds with Negative Space';
      const mood = inputs.mood || 'Epic & Mystical';
      const quality = inputs.quality || 'Masterpiece, 8k resolution, raytracing, HDR';
      const extra = inputs.additionalDetails ? `, ${inputs.additionalDetails}` : '';
      const ar = inputs.aspectRatio ? inputs.aspectRatio.toString().split(' ')[0] : '16:9';

      return `${artStyle} of ${subject}${character}${environment}, ${lighting}, captured from a ${cameraAngle} using a ${cameraLens}, composed with ${composition}. ${mood} atmosphere with rich volumetric particles, subsurface scattering, color graded in DaVinci Resolve, ${quality}${extra} --ar ${ar} --v 6.1 --style raw --q 2`;
    }

    case 'video-prompt': {
      const scene = inputs.sceneDescription || 'A breathtaking cinematic moment unfolds.';
      const characters = inputs.characters || 'A charismatic protagonist';
      const actions = inputs.characterActions || 'moves with deliberate intent and subtle grace';
      const expressions = inputs.facialExpressions || 'deep emotional focus, expressive eyes reflecting the surroundings';
      const dialogue = inputs.dialogue || '"This changes everything."';
      const duration = inputs.duration || '10 Seconds';
      const camera = inputs.cameraMovement || 'Slow Cinematic Dolly Forward';
      const angle = inputs.cameraAngle || 'Medium Close-Up';
      const env = inputs.environment || 'atmospheric environment filled with subtle ambient motion';
      const lighting = inputs.lighting || 'Volumetric cinematic lighting with soft rim highlight';
      const sfx = inputs.soundEffects || 'Subtle ambient reverb, footsteps, low frequency rumble';
      const music = inputs.music || 'Ethereal cinematic synth score building with gentle strings';

      return `[SCENE]: ${scene}
[CHARACTERS]: ${characters}
[ACTIONS]: ${actions}
[FACIAL EXPRESSIONS]: ${expressions}
[DIALOGUE & LIP SYNC]: ${dialogue} (Accurate lip synchronization with natural speech cadence)
[CAMERA MOVEMENT]: ${camera} with ${angle}, smooth gimbal stabilization, cinematic motion blur
[LIGHTING]: ${lighting}
[ENVIRONMENT]: ${env}
[AUDIO DESIGN]: ${sfx}. Score: ${music}
[TIMING & DURATION]: ${duration}. Smooth slow-motion ramp at climax, seamless ending fade.`;
    }

    case 'image-to-video': {
      const scene = inputs.sceneDescription || 'A captivating still image';
      const charMove = inputs.characterMovement || 'Slowly shifts posture, natural head turn toward the focal point';
      const faceExpr = inputs.facialExpression || 'Subtle transition from focused contemplation to confident warmth';
      const bodyMove = inputs.bodyMovement || 'Natural rhythmic breathing, gentle fabric flutter with aerodynamic physics';
      const duration = inputs.duration || '6 Seconds';
      const camera = inputs.cameraMovement || 'Gentle slow push in (Zoom 1.15x)';
      const dist = inputs.cameraDistance || 'Medium shot';
      const lighting = inputs.lighting || 'Sunbeams shifting across the frame';
      const env = inputs.environment || 'Drifting atmospheric dust motes, realistic micro-movements';
      const sfx = inputs.soundEffects || 'Gentle ambient breeze, subtle spatial soundscape';

      return `### 1. MOTION PROMPT
Initial image comes to life with fluid physical realism: ${scene}.
- Movement: ${charMove}. ${faceExpr}.
- Physics: ${bodyMove}.
- Camera Dynamics: ${camera} maintaining a ${dist}, zero camera jitter.
- Environment & Light: ${env}, with ${lighting}.
- Sound Design: ${sfx}.
- Duration: ${duration} continuous smooth 24fps motion.

### 2. CHARACTER CONSISTENCY INSTRUCTIONS
1. Anchor Seed & Facial Geometry: Lock facial bone structure, eye shape, and nose profile strictly to the reference frame.
2. Wardrobe Lock: Prevent garment texture morphing or color shifts between frames.
3. Lighting Continuity: Ensure shadow falloff remains physically grounded to the primary key light.
4. Anatomy Guard: Avoid extra fingers, melting limbs, or uncanny morphs during motion transitions.`;
    }

    case 'youtube-title': {
      const topic = inputs.topic || 'How to Master AI in 2026';
      const kw = inputs.keywords ? ` (${inputs.keywords})` : '';

      return `### CATCHY TITLES
1. I Tried ${topic} for 30 Days (Here's What Happened)
2. The Truth About ${topic} Nobody is Telling You!
3. Why 99% of People Fail at ${topic}
4. How I Mastered ${topic} in Record Time
5. Stop Doing ${topic} Until You Watch This!

### SEO-FRIENDLY TITLES
1. ${topic} - Complete Beginner's Guide (Step by Step 2026)
2. How to Do ${topic} for Free${kw}
3. The Ultimate ${topic} Tutorial for Beginners
4. Top Strategies for ${topic} You Need to Know
5. ${topic} Explained in 10 Minutes

### CURIOSITY-BASED TITLES
1. This One Secret Changed My Entire Approach to ${topic}...
2. They Don't Want You to Know About ${topic}
3. What Happens When You Push ${topic} to the Limit?
4. I Didn't Expect THIS When Doing ${topic}
5. The Simple Trick That Unlocks ${topic}

### SHORT & PUNCHY TITLES
1. Master ${topic} Fast
2. The ${topic} Blueprint
3. Don't Ignore ${topic}
4. Secret to ${topic}
5. ${topic} in 5 Minutes!`;
    }

    case 'youtube-description': {
      const title = inputs.videoTitle || 'Mastering AI Tools in 2026';
      const topic = inputs.videoTopic || 'In this video, we break down actionable strategies, workflow tips, and step-by-step guides.';
      const kw = String(inputs.keywords || 'ai tools, productivity, creator guide');
      const niche = String(inputs.channelNiche || 'Tech & Creator Growth');

      return `📌 In this video: ${title}

${topic}

Whether you are just getting started or looking to level up your ${niche} skills, this step-by-step breakdown gives you the exact blueprint and tools you need.

━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ CHAPTERS / TIMESTAMPS:
0:00 - Introduction & Hook
1:15 - The Core Concept Explained
3:45 - Step-by-Step Walkthrough
7:20 - Real-World Creator Case Study
10:15 - Mistakes to Avoid
12:30 - Final Verdict & Pro Tips

━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔗 RESOURCES & LINKS MENTIONED:
• Nomi AI Tools: https://nomiai.app/tools
• Recommended Starter Kit & Templates
• Free Creator Community & Discord

━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 SUBSCRIBE & STAY AHEAD:
If this video helped you, smash that LIKE button and SUBSCRIBE for more weekly high-value guides on ${niche}!

#${kw.split(',')[0]?.trim().replace(/\s+/g, '') || 'CreativeAI'} #CreatorEconomy #NomiAI #Productivity #VideoTutorial`;
    }

    case 'facebook-caption': {
      const topic = inputs.topic || 'Something exciting I wanted to share with you all today!';
      const tone = inputs.tone || 'Inspirational & Warm';

      return `### 1. SHORT CAPTION
✨ Big shift happening right now: ${topic} What's your take? 👇

### 2. LONG STORYTELLING CAPTION
Most people won't talk about this, but here is the raw truth.

When I first started exploring ${topic}, I had doubts. Everyone was following the same old playbook, expecting different results.

Here is what I learned the hard way:
1. Consistency beats intensity every single day.
2. Having the right tools saves you hundreds of wasted hours.
3. Your unique perspective is your biggest unfair advantage.

If you are currently working on your creative goals, remember that small daily steps compound into massive breakthroughs. Keep showing up. 🚀

### 3. CALL TO ACTION (CTA)
💬 Drop a comment below: Have you tried ${topic} yet? What is your biggest challenge right now? Let's discuss!

### 4. RELEVANT HASHTAGS
#ContentCreator #CreatorTips #GrowthMindset #ProductivityHacks #NomiAI #DailyMotivation`;
    }

    case 'tiktok-caption': {
      const topic = inputs.videoTopic || '3 secret AI websites that feel illegal to know';
      const niche = String(inputs.niche || 'Tech & Gadgets');

      return `### 1. VIRAL CAPTION IDEAS (3 Options)
• Option 1 (Curiosity Hook): Nobody is talking about this yet 🤫 save this before it gets patched!
• Option 2 (Relatable / High-Energy): If you're a creator in 2026, you NEED to try this right now 🤯
• Option 3 (Direct Value): The exact step-by-step trick to ${topic} in under 60 seconds 👇

### 2. SHORT VIDEO DESCRIPTION
Revealing how to master ${topic} without spending a dime. Try it out on Nomi AI!

### 3. TRENDING & NICHE HASHTAGS
#fyp #viral #foryoupage #${niche.toLowerCase().replace(/[^a-z0-9]/g, '')} #creatorhacks #lifehack #aiwebsite #nomiai`;
    }

    case 'story-generator': {
      const topic = inputs.storyTopic || 'A mysterious signal received from the edge of the galaxy';
      const genre = inputs.genre || 'Sci-Fi';
      const chars = inputs.characters || 'Dr. Maya Lin & Commander Hayes';

      return `# ECHOES OF THE SINGULARITY
Genre: ${genre} | Premise: ${topic}

### Scene 1: The First Resonance
- Scene Description: The deep-space observation dome was silent except for the low rhythmic hum of cryogenic coolers. Outside, nebular clouds glowed in amber and violet.
- Characters: ${chars}
- Actions: Maya stares intently at the oscillating waveform on her holographic monitor. Her hands tremble slightly as she recalibrates the sub-space dish.
- Dialogue:
  Maya: (Whispering in disbelief) "Hayes... wake up. The signal isn't cosmic noise. It has a pulse."
  Hayes: (Rushing to the console, rubbing sleep from his eyes) "Run the decryption cipher again. That frequency hasn't been active in three hundred years."

### Scene 2: The Decryption
- Scene Description: The holographic matrix shifts, forming recursive crystalline geometries that project across the metallic bulkhead.
- Characters: ${chars}
- Actions: The air grows perceptibly colder as the terminal begins deciphering the harmonic signature. A low melodic chime echoes through the cabin.
- Dialogue:
  Maya: "Look at the mathematics. It's not warning us. It's remembering us."
  Hayes: "Whoever sent this... they knew we would be standing in this exact coordinate today."

### Scene 3: The Revelation
- Scene Description: A sudden pulse of blue luminescent energy surges through the comms relay, illuminating the station in serene clarity.
- Characters: ${chars}
- Actions: Maya places her palm against the sensor pad, completing the neural handshake. A visual star map unfolds, pointing toward an uncharted celestial gate.
- Dialogue:
  Maya: (Smiling with quiet wonder) "We spent centuries searching for the horizon. It just found us."
  Hayes: "Prep the sub-light drive. We have somewhere to be."`;
    }

    case 'character-prompt': {
      const type = inputs.characterType || 'Cyberpunk Rebel';
      const age = inputs.age || '25 years old';
      const gender = inputs.gender || 'Female';
      const appearance = inputs.appearance || 'Athletic, sharp features, glowing bio-luminescent freckles';
      const face = inputs.face || 'High cheekbones, piercing hazel eyes, asymmetrical silver undercut';
      const clothing = inputs.clothing || 'Weathered charcoal bomber jacket with yellow safety straps, tactical cargo pants';
      const accessories = inputs.accessories || 'Holographic visor, fingerless tactical gloves, audio pendant';
      const artStyle = inputs.artStyle || 'Cinematic Photorealism';
      const lighting = inputs.lighting || 'Dual-tone Neon Rim Light';
      const camera = inputs.camera || '85mm Portrait Cine Lens, f/1.4';

      return `### 1. MASTER CHARACTER PROMPT
${artStyle} portrait of ${gender}, ${age}, archetype: ${type}. Appearance: ${appearance}. Facial Details: ${face}. Wardrobe Anchor: ${clothing}. Signature Accessories: ${accessories}. Pose: Confident and observant posture, captured with an ${camera}, ${lighting}, hyper-detailed skin texture, realistic micro-pores, natural fabric weave, filmic color grading, 8k resolution, raytracing.

### 2. CHARACTER CONSISTENCY INSTRUCTIONS
1. Fixed Prompt Anchor: When generating new scenes, always keep the core description "${clothing}, ${face}, ${accessories}" intact at the beginning of your prompt.
2. Seed Re-use: Save the seed number of the best render in your AI generator (e.g. Midjourney '--seed 123456') to preserve facial symmetry across angles.
3. Facial Angle Variations: Use specific camera descriptors (e.g., 'profile view', 'three-quarter angle', 'looking up at skyline') while locking character keywords.
4. Negative Prompting: Add "different clothing, altered face structure, changing hair color, warped fingers" to your negative prompt list.`;
    }

    case 'blog-writer': {
      const topic = inputs.topic || 'How AI Tools Are Transforming Content Creation in 2026';
      const kw = inputs.keywords || 'AI tools, content creation, creator economy';
      const audience = inputs.targetAudience || 'Modern Creators & Digital Marketers';

      return `# ${topic}

**Meta Description:** Discover how ${topic} empowers ${audience} to produce higher quality content in half the time. Essential strategies and tools for 2026.
**Keywords:** ${kw}

---

## Introduction: The New Era of Creative Productivity

The landscape of content creation has experienced an unprecedented evolution. What once took entire production teams weeks of brainstorming, drafting, and post-production can now be conceptualized and executed in hours.

For ${audience}, the key challenge is no longer access to tools—it is knowing how to build a streamlined, consistent workflow that preserves creative originality while maximizing output velocity.

## Why Old Content Playbooks Are Failing

Traditional creation models rely on manual, repetitive steps:
- Staring at blank pages waiting for creative inspiration.
- Spending hours writing video descriptions, tags, and formatting social captions.
- Re-writing the same message for multiple platforms manually.

Modern creators who leverage AI tools like **Nomi AI** treat artificial intelligence not as a replacement for human creativity, but as an intellectual amplifier.

## Step-by-Step Strategy to Supercharge Your Output

### 1. Master the Art of Intentional Prompting
Vague prompts yield generic results. High-impact creators specify tone, camera angles, lighting conditions, and target reader personas upfront.

### 2. Repurpose With Purpose Across Multi-Platforms
A single deep video or article can effortlessly transform into:
- 5 high-converting YouTube titles
- Engaging Facebook storytelling posts
- High-retention TikTok hooks and trending hashtags
- Visual concept prompts for thumbnail and b-roll generation

### 3. Maintain Authentic Voice & Quality Checks
Always review generated content to inject personal anecdotes, authentic brand voice, and genuine human experience.

## Conclusion: Start Small, Compound Daily

You do not need an expensive tech stack or complicated enterprise software. Free, mobile-optimized tools allow you to generate ideas, craft scripts, and scale your brand wherever you are.

**Take Action Today:** Pick one area of your creative pipeline—be it titles, captions, or image concepts—and streamline it with Nomi AI.

#ContentCreation #AIForCreators #ProductivityHacks #DigitalMarketing #NomiAI`;
    }

    case 'urdu-to-english': {
      const src = inputs.sourceText || 'Ek larka barish mein cycle chala raha hai aur neon roshni chamak rahi hai.';
      const tool = inputs.targetAiTool || 'AI Image Generator';
      const style = inputs.outputStyle || 'Cinematic & Photorealistic 8K';

      return `### 🌟 Professional English AI Prompt
"${style} cinematic still capturing: ${src}
Rendered with hyper-realistic atmospheric depth, glistening rain-drenched asphalt reflecting vibrant neon billboards, fine mist droplets catching soft cinematic backlighting, natural motion blur on bicycle spokes, rich color grading reminiscent of Blade Runner and Wong Kar-wai cinematography, shot on 35mm anamorphic prime lens, 8k resolution, photorealistic masterpiece."

### 💡 Concept Translation Breakdown
- Original Core Meaning Preserved: Fully maintained the emotional essence and visual setting of your original thought without losing its narrative soul.
- Target Medium: Optimized specifically for ${tool}.
- Visual Direction: Infused with high-end cinematographic modifiers (anamorphic lens, volumetric reflections, and color grading) to ensure the AI generator produces breathtaking quality.`;
    }

    case 'hashtag-generator': {
      const topic = (inputs.topic as string) || 'AI creator tools';
      const clean = topic.toLowerCase().replace(/[^a-z0-9]/g, '');

      return `### 📺 YouTube (Shorts & Longform)
#${clean} #Shorts #YouTubeCreator #ContentCreation #ProductivityTips #YouTuberLife #VideoMarketing #Tutorial2026

### 🎵 TikTok (FYP & Viral)
#fyp #foryoupage #viral #${clean} #tiktokgrowth #creatorhacks #lifehack #learnontiktok

### 📸 Instagram (Reels & Feed)
#${clean} #reelsinstagram #contentcreator #digitalcreator #creativetools #creatorcommunity #explorepage #viralreels

### 👥 Facebook (Community & Pages)
#${clean} #Entrepreneurship #SmallBusinessTips #CreativeMindset #SocialMediaMarketing #NomiAI

### 🚀 High-Volume Viral Tags
#viral #trending #explore #technology #innovation #future #success

### 🎯 Niche & Targeted Tags
#creatoreconomy #aimarketing #aiprompts #promptengineering #digitaltools`;
    }

    default:
      return `Generated creative output for: ${JSON.stringify(inputs, null, 2)}`;
  }
}

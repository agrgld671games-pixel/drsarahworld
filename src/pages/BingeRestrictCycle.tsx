import React from 'react';
import BlogPost from './BlogPost';

const BingeRestrictCycle: React.FC = () => {
  const content = (
    <div className="space-y-8">
      <p className="text-xl text-gray-700 leading-relaxed font-medium">
        The binge-restrict cycle is one of the most exhausting and demoralizing patterns in disordered eating. If you've ever found yourself swinging between periods of strict control and episodes of overeating, you're not alone—and more importantly, you're not broken. This cycle is predictable, understandable, and absolutely breakable.
      </p>

      <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">Understanding the Binge-Restrict Cycle</h2>
      <p>
        The binge-restrict cycle is a pattern where periods of food restriction (dieting, "being good," limiting calories) are followed by episodes of overeating or binge eating. This isn't a lack of willpower—it's your body and brain's natural response to deprivation.
      </p>

      <div className="bg-pink-50 p-6 rounded-xl my-6">
        <p className="font-medium text-gray-800 mb-4">The cycle typically looks like this:</p>
        <ol className="space-y-2 text-gray-700">
          <li>1. <strong>Restriction:</strong> Limiting food, following strict diet rules</li>
          <li>2. <strong>Deprivation:</strong> Physical and psychological hunger builds</li>
          <li>3. <strong>Trigger:</strong> Stress, emotion, or "forbidden" food exposure</li>
          <li>4. <strong>Binge:</strong> Overeating, often rapidly and with guilt</li>
          <li>5. <strong>Shame:</strong> Feeling guilty, promising to "be better"</li>
          <li>6. <strong>More restriction:</strong> Attempting to "make up for" the binge</li>
        </ol>
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">Why the Cycle Happens: The Science</h2>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Biological Survival Mechanisms</h3>
      <p>
        When you restrict food, your body interprets this as a famine. It responds by slowing metabolism, increasing hunger hormones (like ghrelin), and creating intense cravings for high-calorie foods. This isn't weakness—it's survival programming that kept our ancestors alive.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. Psychological Reactance</h3>
      <p>
        The human brain rebels against restrictions. When foods are labeled "forbidden," they become more desirable. This psychological reactance explains why you might crave cookies more intensely when they're "not allowed" than when they're freely available.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Cognitive Disinhibition</h3>
      <p>
        Research shows that dieters experience "disinhibited eating" when they perceive they've broken their diet rules. One cookie becomes "I've already ruined my diet, so I might as well eat the whole package." This all-or-nothing thinking perpetuates the cycle.
      </p>

      <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">Real-Life Examples of the Cycle</h2>

      <div className="bg-green-50 p-6 rounded-xl my-6">
        <h4 className="font-bold text-gray-800 mb-3">Sarah's Story:</h4>
        <p className="text-gray-700 mb-3">
          "I'd be 'perfect' all week—salads, no carbs, tiny portions. By Friday night, I was exhausted and stressed from work. I'd order pizza 'just this once,' but then eat the entire thing plus ice cream. Saturday, I'd feel so guilty I'd barely eat anything, promising to start fresh Monday."
        </p>
        <p className="text-gray-700 italic">
          Sound familiar? Sarah's cycle was driven by both physical deprivation and emotional stress.
        </p>
      </div>

      <div className="bg-blue-50 p-6 rounded-xl my-6">
        <h4 className="font-bold text-gray-800 mb-3">Mike's Pattern:</h4>
        <p className="text-gray-700 mb-3">
          "I'd do great during the day—protein shake for breakfast, salad for lunch. But around 3 PM, I'd be starving and irritable. I'd grab a candy bar, then feel like I'd blown it. That would lead to fast food for dinner and snacking all evening."
        </p>
        <p className="text-gray-700 italic">
          Mike's afternoon binges were his body's response to inadequate fuel earlier in the day.
        </p>
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">Breaking the Cycle: Evidence-Based Strategies</h2>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Strategy 1: Mechanical Eating</h3>
      <p>
        The first step is eating regularly, regardless of hunger cues (which may be disrupted from the cycle). Eat three meals and 2-3 snacks daily, spaced 3-4 hours apart. This stabilizes blood sugar and begins to restore normal hunger/fullness signals.
      </p>

      <div className="bg-pink-50 p-6 rounded-xl my-6">
        <p className="font-medium text-gray-800 mb-4">Sample eating schedule:</p>
        <ul className="space-y-2 text-gray-700">
          <li>• 7 AM: Breakfast</li>
          <li>• 10 AM: Morning snack</li>
          <li>• 1 PM: Lunch</li>
          <li>• 4 PM: Afternoon snack</li>
          <li>• 7 PM: Dinner</li>
          <li>• 9 PM: Evening snack (if needed)</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Strategy 2: Include All Food Groups</h3>
      <p>
        Each meal should include carbohydrates, protein, and fat. Carbs provide quick energy and help regulate mood, protein provides satiety, and fat slows digestion and increases satisfaction. Avoiding entire food groups sets you up for cravings and binges.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Strategy 3: Legalize "Forbidden" Foods</h3>
      <p>
        Gradually reintroduce foods you've been restricting. Start with small amounts in a structured way—perhaps having a cookie with lunch rather than keeping them completely off-limits. When foods are no longer forbidden, they lose their power over you.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Strategy 4: Practice Urge Surfing</h3>
      <p>
        When you feel a binge urge, try "surfing" it instead of fighting it. Acknowledge the urge without judgment, remind yourself it will pass, and engage in a brief alternative activity. Urges typically peak and subside within 15-20 minutes.
      </p>

      <div className="bg-green-50 p-6 rounded-xl my-6">
        <p className="font-medium text-gray-800 mb-4">Urge surfing techniques:</p>
        <ul className="space-y-2 text-gray-700">
          <li>• Take 10 deep breaths</li>
          <li>• Call a friend</li>
          <li>• Take a shower</li>
          <li>• Go for a short walk</li>
          <li>• Write in a journal</li>
          <li>• Listen to music</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Strategy 5: Challenge All-or-Nothing Thinking</h3>
      <p>
        Replace perfectionist thoughts with more balanced ones. Instead of "I've ruined everything," try "I'm human, and this is part of the process." One episode of overeating doesn't erase your progress or mean you should restrict tomorrow.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Strategy 6: Address Emotional Triggers</h3>
      <p>
        Many binges are triggered by emotions rather than hunger. Develop a toolkit of non-food coping strategies for stress, sadness, boredom, or anxiety. The goal isn't to never feel these emotions, but to have options besides food.
      </p>

      <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">What Recovery Looks Like</h2>

      <p>
        Breaking the binge-restrict cycle isn't linear. You might have setbacks, and that's normal. Recovery often looks like:
      </p>

      <ul className="space-y-3 text-gray-700 my-6">
        <li>• <strong>Weeks 1-2:</strong> Mechanical eating feels strange, you might still have urges</li>
        <li>• <strong>Weeks 3-4:</strong> Hunger cues start returning, some foods feel less triggering</li>
        <li>• <strong>Months 2-3:</strong> More flexibility with food, fewer intense cravings</li>
        <li>• <strong>Months 4-6:</strong> Natural eating patterns emerge, food feels neutral</li>
        <li>• <strong>Ongoing:</strong> Occasional challenges, but you have tools to handle them</li>
      </ul>

      <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">Common Challenges and How to Handle Them</h2>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">"I'm Afraid I'll Gain Weight"</h3>
      <p>
        Weight may fluctuate initially as your body adjusts to regular eating. However, most people find their weight stabilizes at a healthy level when they stop restricting. The alternative—staying in the cycle—often leads to gradual weight gain over time anyway.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">"I Don't Feel Hungry"</h3>
      <p>
        Hunger cues can be suppressed after periods of restriction. Eat mechanically at first, trusting that your hunger will return as your body learns it can trust you to feed it regularly.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">"I Still Have Binge Episodes"</h3>
      <p>
        Recovery isn't perfect. If you have a binge episode, the most important thing is what you do next. Don't restrict the next day—return to your regular eating schedule. Each time you break the "binge then restrict" pattern, you weaken the cycle.
      </p>

      <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">Building Your Support System</h2>

      <p>
        Breaking this cycle is challenging to do alone. Consider:
      </p>

      <ul className="space-y-3 text-gray-700 my-6">
        <li>• Working with a therapist who specializes in eating disorders</li>
        <li>• Consulting with a registered dietitian trained in intuitive eating</li>
        <li>• Joining support groups (online or in-person)</li>
        <li>• Educating trusted friends and family about your journey</li>
        <li>• Following recovery-focused social media accounts</li>
      </ul>

      <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">Your Freedom Awaits</h2>

      <p>
        The binge-restrict cycle can feel like a prison, but the door is unlocked. It takes courage to step away from the familiar pattern of restriction, even when it's not working. But on the other side of this cycle is food freedom—the ability to eat intuitively, enjoy food without guilt, and trust your body's wisdom.
      </p>

      <div className="bg-pink-100 p-8 rounded-xl mt-12">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Remember:</h3>
        <p className="text-gray-700 mb-4">
          You didn't choose this cycle, but you can choose to break it. Every meal is a new opportunity to nourish yourself with compassion rather than restriction.
        </p>
        <p className="text-gray-700">
          The path to food freedom isn't about perfect eating—it's about consistent, compassionate nourishment of your body and soul.
        </p>
      </div>

      <p className="text-lg text-gray-700 mt-8">
        Your relationship with food can be peaceful, joyful, and free. The cycle ends when you decide it ends—and that decision can start today.
      </p>
    </div>
  );

  return (
    <BlogPost
      title="Breaking the Binge-Restrict Cycle Once and for All"
      date="December 28, 2024"
      readTime="8 min read"
      image="https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg?auto=compress&cs=tinysrgb&w=800"
      content={content}
    />
  );
};

export default BingeRestrictCycle;
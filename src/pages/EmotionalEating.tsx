import React from 'react';
import BlogPost from './BlogPost';

const EmotionalEating: React.FC = () => {
  const content = (
    <div className="space-y-8">
      <p className="text-xl text-gray-700 leading-relaxed font-medium">
        Do you find yourself reaching for food when you're stressed, bored, or upset? You're not alone. Emotional eating affects millions of people, yet many don't even realize they're doing it. Understanding the signs is the first step toward breaking free from this cycle.
      </p>

      <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">What Is Emotional Eating?</h2>
      <p>
        Emotional eating is using food to cope with feelings rather than to satisfy physical hunger. It's a learned behavior that often develops in childhood and becomes an automatic response to emotional triggers. Unlike physical hunger, emotional hunger comes on suddenly and craves specific comfort foods.
      </p>

      <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">The 5 Subtle Signs You're an Emotional Eater</h2>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. You Eat When You're Not Physically Hungry</h3>
      <p>
        Physical hunger builds gradually and can be satisfied with various foods. Emotional hunger strikes suddenly and demands specific comfort foods—usually high in sugar, fat, or salt. You might find yourself eating even when your stomach feels full.
      </p>
      <div className="bg-pink-50 p-6 rounded-xl my-6">
        <p className="font-medium text-gray-800 mb-2">Ask yourself:</p>
        <ul className="space-y-2 text-gray-700">
          <li>• Am I physically hungry right now?</li>
          <li>• When did I last eat?</li>
          <li>• Would an apple satisfy me, or do I need something specific?</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. Your Cravings Are Triggered by Emotions</h3>
      <p>
        Notice the pattern: Do you reach for ice cream after a stressful day? Chips when you're bored? Chocolate when you're sad? Emotional eating is often triggered by specific feelings rather than physical sensations.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. You Eat Quickly and Mindlessly</h3>
      <p>
        Emotional eating often happens on autopilot. You might finish an entire bag of chips while watching TV and barely remember eating them. This mindless consumption is your brain's way of numbing uncomfortable emotions.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4. You Feel Guilty or Ashamed After Eating</h3>
      <p>
        Physical hunger leads to satisfaction after eating. Emotional eating often leaves you feeling worse—guilty, ashamed, or disappointed in yourself. This negative cycle can perpetuate more emotional eating.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">5. Food Is Your Primary Coping Mechanism</h3>
      <p>
        When faced with stress, sadness, or anxiety, is food your go-to solution? If you struggle to identify other ways to cope with difficult emotions, you might be relying too heavily on food for comfort.
      </p>

      <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">What to Do About It: Psychology-Backed Strategies</h2>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Strategy 1: Practice the HALT Method</h3>
      <p>
        Before eating, ask yourself if you're Hungry, Angry, Lonely, or Tired. This simple acronym helps you identify whether your urge to eat is physical or emotional.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Strategy 2: Create an Emotion-Food Journal</h3>
      <p>
        Track your emotions before eating for one week. Note what you're feeling, what you eat, and how you feel afterward. This awareness is crucial for breaking automatic patterns.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Strategy 3: Develop Alternative Coping Skills</h3>
      <div className="bg-green-50 p-6 rounded-xl my-6">
        <p className="font-medium text-gray-800 mb-4">Try these instead of eating:</p>
        <ul className="space-y-2 text-gray-700">
          <li>• Take 10 deep breaths</li>
          <li>• Call a friend</li>
          <li>• Go for a 5-minute walk</li>
          <li>• Write in a journal</li>
          <li>• Listen to music</li>
          <li>• Practice progressive muscle relaxation</li>
        </ul>
      </div>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Strategy 4: Practice Mindful Eating</h3>
      <p>
        When you do eat, slow down. Put away distractions, chew slowly, and pay attention to flavors and textures. This helps you reconnect with physical hunger and fullness cues.
      </p>

      <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Strategy 5: Be Compassionate with Yourself</h3>
      <p>
        Emotional eating isn't a character flaw—it's a learned coping mechanism. Treat yourself with the same kindness you'd show a good friend. Self-compassion is more effective than self-criticism for creating lasting change.
      </p>

      <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6">Moving Forward</h2>
      <p>
        Breaking the emotional eating cycle takes time and practice. Start with awareness, be patient with yourself, and remember that every small step counts. You don't have to do this alone—support makes all the difference.
      </p>

      <div className="bg-pink-100 p-8 rounded-xl mt-12">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Remember:</h3>
        <p className="text-gray-700">
          Emotional eating is a symptom, not the problem itself. By addressing the underlying emotions and developing healthier coping strategies, you can create a more peaceful relationship with food and with yourself.
        </p>
      </div>
    </div>
  );

  return (
    <BlogPost
      title="5 Signs You're an Emotional Eater (And What to Do About It)"
      date="January 15, 2025"
      readTime="7 min read"
      image="https://images.pexels.com/photos/6551415/pexels-photo-6551415.jpeg?auto=compress&cs=tinysrgb&w=800"
      content={content}
    />
  );
};

export default EmotionalEating;
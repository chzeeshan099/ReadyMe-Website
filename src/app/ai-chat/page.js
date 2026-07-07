import AppFrame from "@/components/app-frame";
import ChatPreview from "@/components/chat-preview";
import PageHero from "@/components/page-hero";

export default function AiChatPage() {
  return (
    <AppFrame>
      <PageHero
        badge="AI Chat"
        title="An interactive AI chat route for the website version."
        description="This page carries over the app's conversation-based study support and can later be connected to your real AI backend."
      />
      <ChatPreview />
    </AppFrame>
  );
}


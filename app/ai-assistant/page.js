import AppFrame from "../../components/app-frame";
import ChatPreview from "../../components/chat-preview";
import PageHero from "../../components/page-hero";

export default function AiAssistantPage() {
  return (
    <AppFrame>
      <PageHero
        badge="AI Assistant"
        title="Break topics into clean study steps."
        description="This route mirrors the app's AI assistant experience and sets up a clear section for smart prompts, revision plans, and personalized help."
      />
      <ChatPreview />
    </AppFrame>
  );
}

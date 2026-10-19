"use client";

import { useState } from "react";
import { toast } from "sonner";
import { PixelAurora } from "@/components/ui/pixel/animations/pixel-aurora";
import PixelBlobCursor from "@/components/ui/pixel/animations/pixel-blob-cursor";
// Import animation components
import { PixelBlurText } from "@/components/ui/pixel/animations/pixel-blur-text";
import { PixelBounceCards } from "@/components/ui/pixel/animations/pixel-bounce-cards";
import { PixelCircularText } from "@/components/ui/pixel/animations/pixel-circular-text";
import { PixelCountUp } from "@/components/ui/pixel/animations/pixel-count-up";
import { PixelDecayCard } from "@/components/ui/pixel/animations/pixel-decay-card";
import { PixelDotGrid } from "@/components/ui/pixel/animations/pixel-dot-grid";
import { PixelGalaxy } from "@/components/ui/pixel/animations/pixel-galaxy";
import { PixelGlareCard } from "@/components/ui/pixel/animations/pixel-glare-card";
import { PixelGlitchText } from "@/components/ui/pixel/animations/pixel-glitch-text";
import { PixelGradientText } from "@/components/ui/pixel/animations/pixel-gradient-text";
import { PixelGridMotion } from "@/components/ui/pixel/animations/pixel-grid-motion";
import { PixelImageTrail } from "@/components/ui/pixel/animations/pixel-image-trail";
import { PixelLetterGlitch } from "@/components/ui/pixel/animations/pixel-letter-glitch";
import { PixelMetaBalls } from "@/components/ui/pixel/animations/pixel-meta-balls";
import { PixelPlasma } from "@/components/ui/pixel/animations/pixel-plasma";
import { PixelRibbons } from "@/components/ui/pixel/animations/pixel-ribbons";
import { PixelRippleGrid } from "@/components/ui/pixel/animations/pixel-ripple-grid";
import { PixelRotatingText } from "@/components/ui/pixel/animations/pixel-rotating-text";
import { PixelShinyText } from "@/components/ui/pixel/animations/pixel-shiny-text";
import { PixelShuffleText } from "@/components/ui/pixel/animations/pixel-shuffle-text";
import PixelSplashCursor from "@/components/ui/pixel/animations/pixel-splash-cursor";
import { PixelSplitText } from "@/components/ui/pixel/animations/pixel-split-text";
import { PixelSpotlightCard } from "@/components/ui/pixel/animations/pixel-spotlight-card";
import { PixelSquares } from "@/components/ui/pixel/animations/pixel-squares";
import { PixelStickerPeel } from "@/components/ui/pixel/animations/pixel-sticker-peel";
import PixelTargetCursor from "@/components/ui/pixel/animations/pixel-target-cursor";
import { PixelTextPressure } from "@/components/ui/pixel/animations/pixel-text-pressure";
import { PixelTiltedCard } from "@/components/ui/pixel/animations/pixel-tilted-card";
import PixelTrail from "@/components/ui/pixel/animations/pixel-trail";
import { PixelTrueFocus } from "@/components/ui/pixel/animations/pixel-true-focus";
import { PixelWaves } from "@/components/ui/pixel/animations/pixel-waves";
import {
  PixelAccordion,
  PixelAccordionContent,
  PixelAccordionItem,
  PixelAccordionTrigger,
} from "@/components/ui/pixel/pixel-accordion";
import { PixelAIBubble } from "@/components/ui/pixel/pixel-ai-bubble";
import {
  PixelAlert,
  PixelAlertDescription,
  PixelAlertTitle,
} from "@/components/ui/pixel/pixel-alert";
import {
  PixelAlertDialog,
  PixelAlertDialogAction,
  PixelAlertDialogCancel,
  PixelAlertDialogContent,
  PixelAlertDialogDescription,
  PixelAlertDialogFooter,
  PixelAlertDialogHeader,
  PixelAlertDialogTitle,
  PixelAlertDialogTrigger,
} from "@/components/ui/pixel/pixel-alert-dialog";
import { PixelAspectRatio } from "@/components/ui/pixel/pixel-aspect-ratio";
import { PixelAudioVisualizer } from "@/components/ui/pixel/pixel-audio-visualizer";
import {
  PixelAvatar,
  PixelAvatarFallback,
  PixelAvatarImage,
} from "@/components/ui/pixel/pixel-avatar";
import { PixelBadge } from "@/components/ui/pixel/pixel-badge";
import {
  PixelBentoContent,
  PixelBentoDescription,
  PixelBentoGrid,
  PixelBentoHeader,
  PixelBentoIcon,
  PixelBentoItem,
  PixelBentoTitle,
} from "@/components/ui/pixel/pixel-bento";
import {
  PixelBreadcrumb,
  PixelBreadcrumbItem,
  PixelBreadcrumbLink,
  PixelBreadcrumbList,
  PixelBreadcrumbSeparator,
} from "@/components/ui/pixel/pixel-breadcrumb";
import { PixelButton } from "@/components/ui/pixel/pixel-button";
import {
  PixelCard,
  PixelCardContent,
  PixelCardDescription,
  PixelCardFooter,
  PixelCardHeader,
  PixelCardTitle,
} from "@/components/ui/pixel/pixel-card";
import {
  PixelChat,
  PixelMessageBubble,
} from "@/components/ui/pixel/pixel-chat";
import { PixelCheckbox } from "@/components/ui/pixel/pixel-checkbox";
import {
  PixelCode,
  PixelCodeBlock,
} from "@/components/ui/pixel/pixel-code-block";
import {
  PixelCollapsible,
  PixelCollapsibleContent,
  PixelCollapsibleTrigger,
} from "@/components/ui/pixel/pixel-collapsible";
import {
  PixelCommand,
  PixelCommandEmpty,
  PixelCommandGroup,
  PixelCommandInput,
  PixelCommandItem,
  PixelCommandList,
} from "@/components/ui/pixel/pixel-command";
import {
  PixelContextMenu,
  PixelContextMenuContent,
  PixelContextMenuItem,
  PixelContextMenuTrigger,
} from "@/components/ui/pixel/pixel-context-menu";
import {
  PixelCountdown,
  PixelTimer,
} from "@/components/ui/pixel/pixel-countdown";
import {
  PixelCta,
  PixelCtaActions,
  PixelCtaContent,
  PixelCtaDescription,
  PixelCtaHighlight,
  PixelCtaTitle,
} from "@/components/ui/pixel/pixel-cta";
import {
  PixelDialog,
  PixelDialogContent,
  PixelDialogDescription,
  PixelDialogHeader,
  PixelDialogTitle,
  PixelDialogTrigger,
} from "@/components/ui/pixel/pixel-dialog";
import {
  PixelDrawer,
  PixelDrawerClose,
  PixelDrawerContent,
  PixelDrawerDescription,
  PixelDrawerHeader,
  PixelDrawerTitle,
  PixelDrawerTrigger,
} from "@/components/ui/pixel/pixel-drawer";
import {
  PixelDropdownMenu,
  PixelDropdownMenuContent,
  PixelDropdownMenuItem,
  PixelDropdownMenuTrigger,
} from "@/components/ui/pixel/pixel-dropdown-menu";
import { PixelDropzone } from "@/components/ui/pixel/pixel-dropzone";
import {
  PixelEmpty,
  PixelEmptyDescription,
  PixelEmptyMedia,
  PixelEmptyTitle,
} from "@/components/ui/pixel/pixel-empty";
import {
  PixelFaq,
  PixelFaqAnswer,
  PixelFaqItem,
  PixelFaqList,
  PixelFaqQuestion,
} from "@/components/ui/pixel/pixel-faq";
import {
  PixelFeatureDescription,
  PixelFeatureIcon,
  PixelFeatureItem,
  PixelFeatures,
  PixelFeatureTitle,
} from "@/components/ui/pixel/pixel-features";
import {
  PixelFooter,
  PixelFooterBottom,
  PixelFooterCopyright,
  PixelFooterDivider,
  PixelFooterGrid,
  PixelFooterLink,
  PixelFooterLinks,
  PixelFooterSection,
  PixelFooterSocial,
  PixelFooterSocialLink,
  PixelFooterTitle,
} from "@/components/ui/pixel/pixel-footer";
import {
  PixelAchievement,
  PixelDamageNumber,
  PixelHealthBar,
  PixelInventory,
  PixelInventorySlot,
  PixelManaBar,
  PixelXPBar,
} from "@/components/ui/pixel/pixel-game-ui";
import {
  PixelHero,
  PixelHeroActions,
  PixelHeroBadge,
  PixelHeroContent,
  PixelHeroDescription,
  PixelHeroSubtitle,
  PixelHeroTitle,
} from "@/components/ui/pixel/pixel-hero";
import {
  PixelHoverCard,
  PixelHoverCardContent,
  PixelHoverCardTrigger,
} from "@/components/ui/pixel/pixel-hover-card";
import { PixelInput } from "@/components/ui/pixel/pixel-input";
import {
  PixelInputOTP,
  PixelInputOTPGroup,
  PixelInputOTPSeparator,
  PixelInputOTPSlot,
} from "@/components/ui/pixel/pixel-input-otp";
import { PixelInventoryPicker } from "@/components/ui/pixel/pixel-inventory-picker";
import { PixelKbd } from "@/components/ui/pixel/pixel-kbd";
import { PixelLabel } from "@/components/ui/pixel/pixel-label";
// Import special components
import { PixelLoader } from "@/components/ui/pixel/pixel-loader";
import {
  PixelMenubar,
  PixelMenubarContent,
  PixelMenubarItem,
  PixelMenubarMenu,
  PixelMenubarSeparator,
  PixelMenubarTrigger,
} from "@/components/ui/pixel/pixel-menubar";
import {
  PixelNavigationMenu,
  PixelNavigationMenuContent,
  PixelNavigationMenuItem,
  PixelNavigationMenuLink,
  PixelNavigationMenuList,
  PixelNavigationMenuTrigger,
} from "@/components/ui/pixel/pixel-navigation-menu";
import {
  PixelNotification,
  usePixelToast,
} from "@/components/ui/pixel/pixel-notification";
import {
  PixelPagination,
  PixelPaginationContent,
  PixelPaginationItem,
  PixelPaginationLink,
  PixelPaginationNext,
  PixelPaginationPrevious,
} from "@/components/ui/pixel/pixel-pagination";
import { PixelParallaxHero } from "@/components/ui/pixel/pixel-parallax-hero";
import {
  PixelPopover,
  PixelPopoverContent,
  PixelPopoverTrigger,
} from "@/components/ui/pixel/pixel-popover";
import {
  PixelPricing,
  PixelPricingActions,
  PixelPricingBadge,
  PixelPricingCard,
  PixelPricingDescription,
  PixelPricingFeature,
  PixelPricingFeatures,
  PixelPricingPeriod,
  PixelPricingPrice,
  PixelPricingTitle,
} from "@/components/ui/pixel/pixel-pricing";
import { PixelProgress } from "@/components/ui/pixel/pixel-progress";
import {
  PixelRadioGroup,
  PixelRadioGroupItem,
} from "@/components/ui/pixel/pixel-radio-group";
import { PixelRating } from "@/components/ui/pixel/pixel-rating";
import { PixelScrollArea } from "@/components/ui/pixel/pixel-scroll-area";
import {
  PixelSelect,
  PixelSelectContent,
  PixelSelectItem,
  PixelSelectTrigger,
  PixelSelectValue,
} from "@/components/ui/pixel/pixel-select";
import { PixelSeparator } from "@/components/ui/pixel/pixel-separator";
import {
  PixelSheet,
  PixelSheetContent,
  PixelSheetHeader,
  PixelSheetTitle,
  PixelSheetTrigger,
} from "@/components/ui/pixel/pixel-sheet";
import { PixelSkeleton } from "@/components/ui/pixel/pixel-skeleton";
import { PixelSlider } from "@/components/ui/pixel/pixel-slider";
import { PixelToaster } from "@/components/ui/pixel/pixel-sonner";
import { PixelSpinner } from "@/components/ui/pixel/pixel-spinner";
import {
  PixelStatIcon,
  PixelStatItem,
  PixelStatLabel,
  PixelStats,
  PixelStatTrend,
  PixelStatValue,
} from "@/components/ui/pixel/pixel-stats";
import { PixelSwitch } from "@/components/ui/pixel/pixel-switch";
import {
  PixelTable,
  PixelTableBody,
  PixelTableCell,
  PixelTableHead,
  PixelTableHeader,
  PixelTableRow,
} from "@/components/ui/pixel/pixel-table";
import {
  PixelTabs,
  PixelTabsContent,
  PixelTabsList,
  PixelTabsTrigger,
} from "@/components/ui/pixel/pixel-tabs";
import { PixelTerminal } from "@/components/ui/pixel/pixel-terminal";
import {
  PixelTestimonialAuthor,
  PixelTestimonialAvatar,
  PixelTestimonialCard,
  PixelTestimonialInfo,
  PixelTestimonialName,
  PixelTestimonialQuote,
  PixelTestimonialRating,
  PixelTestimonialRole,
  PixelTestimonials,
} from "@/components/ui/pixel/pixel-testimonials";
import { PixelTextarea } from "@/components/ui/pixel/pixel-textarea";
import {
  PixelTimeline,
  PixelTimelineCheckpoint,
} from "@/components/ui/pixel/pixel-timeline";
import {
  PixelTimelineNavigation,
  PixelTimelineStep,
  PixelTimelineSteps,
} from "@/components/ui/pixel/pixel-timeline-navigation";
import {
  PixelToastProvider,
  usePixelToast as useSimpleToast,
} from "@/components/ui/pixel/pixel-toast";
import {
  PixelTooltip,
  PixelTooltipContent,
  PixelTooltipProvider,
  PixelTooltipTrigger,
} from "@/components/ui/pixel/pixel-tooltip";
import {
  PixelUndoChipProvider,
  usePixelUndoChip,
} from "@/components/ui/pixel/pixel-undo-chip";
import {
  PixelWarningTooltip,
  PixelWarningTooltipContent,
  PixelWarningTooltipProvider,
  PixelWarningTooltipTrigger,
} from "@/components/ui/pixel/pixel-warning-tooltip";
import {
  PixelWindow,
  PixelWindowContent,
  PixelWindowMenuBar,
} from "@/components/ui/pixel/pixel-window";

// Helper component for Toast demo
function ToastDemo() {
  const { addToast } = useSimpleToast();

  return (
    <div className="flex gap-4 flex-wrap">
      <PixelButton onClick={() => addToast("This is a toast notification!")}>
        Show Toast
      </PixelButton>
      <PixelButton
        variant="secondary"
        onClick={() =>
          addToast("Success!", {
            label: "Undo",
            onClick: () => console.log("Undo clicked"),
          })
        }
      >
        Toast with Action
      </PixelButton>
    </div>
  );
}

// Wrapper component that provides toast context
function ToastDemoWrapper() {
  return (
    <PixelToastProvider>
      <ToastDemo />
    </PixelToastProvider>
  );
}

// Helper component for Sonner demo
function SonnerDemo() {
  return (
    <div className="flex gap-4 flex-wrap">
      <PixelButton onClick={() => toast.success("Success message!")}>
        Success Toast
      </PixelButton>
      <PixelButton
        variant="secondary"
        onClick={() => toast.error("Error message!")}
      >
        Error Toast
      </PixelButton>
      <PixelButton onClick={() => toast("Default message")}>
        Default Toast
      </PixelButton>
      <PixelButton onClick={() => toast.loading("Loading...")}>
        Loading Toast
      </PixelButton>
    </div>
  );
}

// Helper component for Undo Chip demo
function UndoChipDemo() {
  const { showUndoChip } = usePixelUndoChip();

  return (
    <div className="flex gap-4 flex-wrap">
      <PixelButton
        onClick={() =>
          showUndoChip("Item deleted", {
            onUndo: () => console.log("Undo delete"),
            variant: "default",
          })
        }
      >
        Delete Item
      </PixelButton>

      <PixelButton
        variant="secondary"
        onClick={() =>
          showUndoChip("Message sent", {
            onUndo: () => console.log("Undo send"),
            variant: "info",
          })
        }
      >
        Send Message
      </PixelButton>

      <PixelButton
        onClick={() =>
          showUndoChip("Changes saved", {
            onUndo: () => console.log("Undo changes"),
            variant: "default",
            duration: 8000,
          })
        }
      >
        Save Changes
      </PixelButton>
    </div>
  );
}

// Wrapper component that provides undo chip context
function UndoChipDemoWrapper() {
  return (
    <PixelUndoChipProvider position="bottom-center">
      <UndoChipDemo />
    </PixelUndoChipProvider>
  );
}

export function ComponentPreview({ slug }: { slug: string }) {
  const [checked, setChecked] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  const [switchValue, setSwitchValue] = useState(false);
  const [sliderValue, setSliderValue] = useState([50]);
  const [radioValue, setRadioValue] = useState("option1");
  const [otpValue, setOtpValue] = useState("");
  const [dropzoneFiles, setDropzoneFiles] = useState<File[]>([]);
  const [inventorySelection, setInventorySelection] = useState<string[]>([]);
  const inventoryItems = [
    {
      id: "blade",
      label: "Blade",
      icon: "🗡️",
      quantity: 1,
      rarity: "common" as const,
    },
    {
      id: "shield",
      label: "Shield",
      icon: "🛡️",
      quantity: 1,
      rarity: "rare" as const,
    },
    {
      id: "potion",
      label: "Potion",
      icon: "🧪",
      quantity: 3,
      rarity: "epic" as const,
    },
    {
      id: "orb",
      label: "Orb",
      icon: "🔮",
      quantity: 1,
      rarity: "legendary" as const,
    },
  ];

  switch (slug) {
    case "pixel-button":
      return (
        <div className="flex gap-4 flex-wrap">
          <PixelButton>Default</PixelButton>
          <PixelButton variant="secondary">Secondary</PixelButton>
          <PixelButton variant="ghost">Ghost</PixelButton>
          <PixelButton variant="destructive">Destructive</PixelButton>
        </div>
      );

    case "pixel-card":
      return (
        <PixelCard className="w-[350px]">
          <PixelCardHeader>
            <PixelCardTitle>Card Title</PixelCardTitle>
            <PixelCardDescription>
              Card description goes here
            </PixelCardDescription>
          </PixelCardHeader>
          <PixelCardContent>
            <p>This is the card content area.</p>
          </PixelCardContent>
          <PixelCardFooter>
            <PixelButton>Action</PixelButton>
          </PixelCardFooter>
        </PixelCard>
      );

    case "pixel-input":
      return <PixelInput placeholder="Enter text..." className="max-w-sm" />;

    case "pixel-input-otp": {
      const hasError = otpValue.length > 0 && otpValue.length < 6;
      return (
        <PixelInputOTP
          value={otpValue}
          onChange={setOtpValue}
          maxLength={6}
          label="Verification Code"
          helperText={
            hasError
              ? "Enter all 6 digits"
              : "Type the 6-digit code we sent you"
          }
          hasError={hasError}
          render={({ slots }) => (
            <PixelInputOTPGroup className="gap-3">
              {slots.slice(0, 3).map((_, index) => (
                <PixelInputOTPSlot key={index} index={index} />
              ))}
              <PixelInputOTPSeparator />
              {slots.slice(3).map((_, index) => (
                <PixelInputOTPSlot key={index + 3} index={index + 3} />
              ))}
            </PixelInputOTPGroup>
          )}
        />
      );
    }

    case "pixel-dropzone": {
      const helper = dropzoneFiles.length
        ? `${dropzoneFiles.length} file${dropzoneFiles.length > 1 ? "s" : ""} ready`
        : "PNG, GIF or WEBP up to 10MB";
      return (
        <PixelDropzone
          label="Upload Assets"
          description={
            <p className="text-xs text-black/70 dark:text-white/70">
              Drop sprites or click to browse
            </p>
          }
          helperText={helper}
          hasError={dropzoneFiles.length >= 4}
          maxFiles={4}
          accept={["image/png", "image/webp", "image/gif"]}
          files={dropzoneFiles}
          onFilesChange={setDropzoneFiles}
        />
      );
    }

    case "pixel-inventory-picker": {
      const equippedLabel = inventorySelection.length
        ? `${inventorySelection.length} item${inventorySelection.length > 1 ? "s" : ""} equipped`
        : "Select up to 3 items";
      return (
        <PixelInventoryPicker
          label="Inventory"
          items={inventoryItems}
          maxSelections={3}
          helperText={equippedLabel}
          selectedIds={inventorySelection}
          onSelectionChange={setInventorySelection}
        />
      );
    }

    case "pixel-badge":
      return (
        <div className="flex gap-2 flex-wrap">
          <PixelBadge>Default</PixelBadge>
          <PixelBadge variant="success">Success</PixelBadge>
          <PixelBadge variant="warning">Warning</PixelBadge>
          <PixelBadge variant="error">Error</PixelBadge>
        </div>
      );

    case "pixel-checkbox":
      return (
        <div className="flex items-center space-x-2">
          <PixelCheckbox
            id="preview"
            checked={checked}
            onCheckedChange={(c) => setChecked(c as boolean)}
          />
          <PixelLabel htmlFor="preview">Accept terms and conditions</PixelLabel>
        </div>
      );

    case "pixel-select":
      return (
        <PixelSelect value={selectValue} onValueChange={setSelectValue}>
          <PixelSelectTrigger className="w-[200px]">
            <PixelSelectValue placeholder="Choose option" />
          </PixelSelectTrigger>
          <PixelSelectContent>
            <PixelSelectItem value="1">Option 1</PixelSelectItem>
            <PixelSelectItem value="2">Option 2</PixelSelectItem>
            <PixelSelectItem value="3">Option 3</PixelSelectItem>
          </PixelSelectContent>
        </PixelSelect>
      );

    case "pixel-tabs":
      return (
        <PixelTabs defaultValue="tab1" className="w-[400px]">
          <PixelTabsList>
            <PixelTabsTrigger value="tab1">Tab 1</PixelTabsTrigger>
            <PixelTabsTrigger value="tab2">Tab 2</PixelTabsTrigger>
          </PixelTabsList>
          <PixelTabsContent value="tab1">Content for tab 1</PixelTabsContent>
          <PixelTabsContent value="tab2">Content for tab 2</PixelTabsContent>
        </PixelTabs>
      );

    case "pixel-hero":
      return (
        <PixelHero variant="default" size="md" className="w-full">
          <PixelHeroContent>
            <PixelHeroBadge>🎮 New Release</PixelHeroBadge>
            <PixelHeroTitle size="md">Pixel UI</PixelHeroTitle>
            <PixelHeroSubtitle size="sm">
              8-Bit Retro Components
            </PixelHeroSubtitle>
            <PixelHeroDescription>
              Build nostalgic web experiences with pixel-perfect components
            </PixelHeroDescription>
            <PixelHeroActions>
              <PixelButton size="sm">Get Started</PixelButton>
              <PixelButton size="sm" variant="ghost">
                Learn More
              </PixelButton>
            </PixelHeroActions>
          </PixelHeroContent>
        </PixelHero>
      );

    case "pixel-parallax-hero":
      return (
        <PixelParallaxHero
          badge={<span>NEW</span>}
          subtitle="Retro Depth"
          title="Parallax Hero"
          description="Layered panels glide with your cursor to create true 8-bit immersion."
          primaryAction={{ label: "Explore", href: "/docs/components" }}
          secondaryAction={{
            label: "GitHub",
            href: "https://github.com/Team-Parashuram/Pixel-art-8-bit",
            variant: "ghost",
          }}
          stats={[
            { label: "Layers", value: "4" },
            { label: "FPS", value: "60" },
            { label: "Latency", value: "0ms" },
          ]}
        />
      );

    case "pixel-bento":
      return (
        <PixelBentoGrid columns={3} className="w-full">
          <PixelBentoItem span={2} variant="primary">
            <PixelBentoHeader>
              <PixelBentoIcon>🎮</PixelBentoIcon>
              <PixelBentoTitle>Featured</PixelBentoTitle>
              <PixelBentoDescription>Main content area</PixelBentoDescription>
            </PixelBentoHeader>
            <PixelBentoContent>
              <p className="text-sm">
                Large featured section with 2-column span
              </p>
            </PixelBentoContent>
          </PixelBentoItem>
          <PixelBentoItem variant="secondary">
            <PixelBentoIcon>🎯</PixelBentoIcon>
            <PixelBentoTitle>Item 1</PixelBentoTitle>
          </PixelBentoItem>
          <PixelBentoItem variant="dark">
            <PixelBentoIcon>🔥</PixelBentoIcon>
            <PixelBentoTitle>Item 2</PixelBentoTitle>
          </PixelBentoItem>
          <PixelBentoItem>
            <PixelBentoIcon>💎</PixelBentoIcon>
            <PixelBentoTitle>Item 3</PixelBentoTitle>
          </PixelBentoItem>
          <PixelBentoItem variant="gradient">
            <PixelBentoIcon>🚀</PixelBentoIcon>
            <PixelBentoTitle>Item 4</PixelBentoTitle>
          </PixelBentoItem>
        </PixelBentoGrid>
      );

    case "pixel-features":
      return (
        <PixelFeatures columns={3} gap="lg" className="w-full">
          <PixelFeatureItem hover="lift">
            <PixelFeatureIcon>🚀</PixelFeatureIcon>
            <PixelFeatureTitle>Fast</PixelFeatureTitle>
            <PixelFeatureDescription>
              Blazing fast performance
            </PixelFeatureDescription>
          </PixelFeatureItem>
          <PixelFeatureItem hover="lift">
            <PixelFeatureIcon>🎨</PixelFeatureIcon>
            <PixelFeatureTitle>Modern</PixelFeatureTitle>
            <PixelFeatureDescription>
              Pixel-perfect design
            </PixelFeatureDescription>
          </PixelFeatureItem>
          <PixelFeatureItem hover="lift">
            <PixelFeatureIcon>🔧</PixelFeatureIcon>
            <PixelFeatureTitle>Flexible</PixelFeatureTitle>
            <PixelFeatureDescription>
              Fully customizable
            </PixelFeatureDescription>
          </PixelFeatureItem>
        </PixelFeatures>
      );

    case "pixel-cta":
      return (
        <PixelCta variant="primary" size="md" className="w-full">
          <PixelCtaContent>
            <PixelCtaTitle>Get Started Today</PixelCtaTitle>
            <PixelCtaDescription>
              Join thousands of developers building amazing things
            </PixelCtaDescription>
            <PixelCtaActions>
              <PixelButton size="lg">Start Building</PixelButton>
              <PixelButton variant="ghost" size="lg">
                Learn More
              </PixelButton>
            </PixelCtaActions>
          </PixelCtaContent>
        </PixelCta>
      );

    case "pixel-accordion":
      return (
        <PixelAccordion type="single" collapsible className="w-full">
          <PixelAccordionItem value="item-1">
            <PixelAccordionTrigger>Question 1</PixelAccordionTrigger>
            <PixelAccordionContent>Answer to question 1</PixelAccordionContent>
          </PixelAccordionItem>
          <PixelAccordionItem value="item-2">
            <PixelAccordionTrigger>Question 2</PixelAccordionTrigger>
            <PixelAccordionContent>Answer to question 2</PixelAccordionContent>
          </PixelAccordionItem>
        </PixelAccordion>
      );

    case "pixel-switch":
      return (
        <div className="flex items-center space-x-2">
          <PixelSwitch
            id="switch"
            checked={switchValue}
            onCheckedChange={setSwitchValue}
          />
          <PixelLabel htmlFor="switch">Airplane Mode</PixelLabel>
        </div>
      );

    case "pixel-radio-group":
      return (
        <PixelRadioGroup value={radioValue} onValueChange={setRadioValue}>
          <div className="flex items-center space-x-2">
            <PixelRadioGroupItem value="option1" id="r1" />
            <PixelLabel htmlFor="r1">Option 1</PixelLabel>
          </div>
          <div className="flex items-center space-x-2">
            <PixelRadioGroupItem value="option2" id="r2" />
            <PixelLabel htmlFor="r2">Option 2</PixelLabel>
          </div>
        </PixelRadioGroup>
      );

    case "pixel-textarea":
      return (
        <PixelTextarea
          placeholder="Type your message..."
          className="max-w-sm"
        />
      );

    case "pixel-slider":
      return (
        <div className="w-[300px]">
          <PixelSlider
            value={sliderValue}
            onValueChange={setSliderValue}
            max={100}
            step={1}
          />
        </div>
      );

    case "pixel-label":
      return <PixelLabel>This is a label</PixelLabel>;

    case "pixel-rating": {
      const [rating, setRating] = useState(3);
      return (
        <div className="space-y-4">
          <PixelRating
            value={rating}
            onRatingChange={setRating}
            variant="gold"
            size="lg"
          />
          <p className="text-sm">Current rating: {rating} stars</p>
        </div>
      );
    }

    case "pixel-avatar":
      return (
        <div className="flex gap-4">
          <PixelAvatar>
            <PixelAvatarImage src="https://github.com/shadcn.png" />
            <PixelAvatarFallback>CN</PixelAvatarFallback>
          </PixelAvatar>
          <PixelAvatar>
            <PixelAvatarFallback>JD</PixelAvatarFallback>
          </PixelAvatar>
        </div>
      );

    case "pixel-skeleton":
      return (
        <div className="space-y-2">
          <PixelSkeleton className="w-full h-12" />
          <PixelSkeleton className="w-3/4 h-12" />
          <PixelSkeleton className="w-1/2 h-12" />
        </div>
      );

    case "pixel-table":
      return (
        <PixelTable>
          <PixelTableHeader>
            <PixelTableRow>
              <PixelTableHead>Name</PixelTableHead>
              <PixelTableHead>Status</PixelTableHead>
            </PixelTableRow>
          </PixelTableHeader>
          <PixelTableBody>
            <PixelTableRow>
              <PixelTableCell>Item 1</PixelTableCell>
              <PixelTableCell>Active</PixelTableCell>
            </PixelTableRow>
            <PixelTableRow>
              <PixelTableCell>Item 2</PixelTableCell>
              <PixelTableCell>Inactive</PixelTableCell>
            </PixelTableRow>
          </PixelTableBody>
        </PixelTable>
      );

    case "pixel-kbd":
      return (
        <div className="flex gap-2 items-center">
          <span>Press</span>
          <PixelKbd>Ctrl</PixelKbd>
          <span>+</span>
          <PixelKbd>C</PixelKbd>
          <span>to copy</span>
        </div>
      );

    case "pixel-empty":
      return (
        <PixelEmpty>
          <PixelEmptyMedia variant="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </PixelEmptyMedia>
          <PixelEmptyTitle>No items found</PixelEmptyTitle>
          <PixelEmptyDescription>
            Get started by creating a new item
          </PixelEmptyDescription>
        </PixelEmpty>
      );

    case "pixel-alert":
      return (
        <PixelAlert>
          <PixelAlertTitle>Heads up!</PixelAlertTitle>
          <PixelAlertDescription>
            This is an alert message with important information.
          </PixelAlertDescription>
        </PixelAlert>
      );

    case "pixel-progress":
      return <PixelProgress value={60} className="w-[300px]" />;

    case "pixel-spinner":
      return <PixelSpinner />;

    case "pixel-warning-tooltip":
      return (
        <PixelWarningTooltipProvider>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 flex-wrap">
              <PixelWarningTooltip>
                <PixelWarningTooltipTrigger severity="info">
                  Info
                </PixelWarningTooltipTrigger>
                <PixelWarningTooltipContent severity="info" size="sm">
                  This is informational
                </PixelWarningTooltipContent>
              </PixelWarningTooltip>

              <PixelWarningTooltip>
                <PixelWarningTooltipTrigger severity="warning">
                  Password
                </PixelWarningTooltipTrigger>
                <PixelWarningTooltipContent severity="warning">
                  Password strength: weak
                </PixelWarningTooltipContent>
              </PixelWarningTooltip>

              <PixelWarningTooltip>
                <PixelWarningTooltipTrigger severity="error">
                  Error
                </PixelWarningTooltipTrigger>
                <PixelWarningTooltipContent severity="error">
                  Something went wrong
                </PixelWarningTooltipContent>
              </PixelWarningTooltip>

              <PixelWarningTooltip>
                <PixelWarningTooltipTrigger severity="critical">
                  Critical
                </PixelWarningTooltipTrigger>
                <PixelWarningTooltipContent severity="critical" size="lg">
                  Critical system error - immediate action required
                </PixelWarningTooltipContent>
              </PixelWarningTooltip>
            </div>
          </div>
        </PixelWarningTooltipProvider>
      );

    case "pixel-undo-chip":
      return <UndoChipDemoWrapper />;

    case "pixel-ai-bubble":
      return (
        <div className="flex flex-col gap-4">
          <PixelAIBubble variant="thinking" message="I'm thinking..." />
          <PixelAIBubble variant="typing" animate={true} />
          <PixelAIBubble
            variant="processing"
            message="Analyzing your request..."
          />
          <PixelAIBubble variant="ready" message="Answer ready!" />
          <PixelAIBubble
            variant="error"
            message="Failed to generate response"
          />
        </div>
      );

    case "pixel-breadcrumb":
      return (
        <PixelBreadcrumb>
          <PixelBreadcrumbList>
            <PixelBreadcrumbItem>
              <PixelBreadcrumbLink href="/">Home</PixelBreadcrumbLink>
            </PixelBreadcrumbItem>
            <PixelBreadcrumbSeparator />
            <PixelBreadcrumbItem>
              <PixelBreadcrumbLink href="/docs">Docs</PixelBreadcrumbLink>
            </PixelBreadcrumbItem>
            <PixelBreadcrumbSeparator />
            <PixelBreadcrumbItem>
              <PixelBreadcrumbLink>Components</PixelBreadcrumbLink>
            </PixelBreadcrumbItem>
          </PixelBreadcrumbList>
        </PixelBreadcrumb>
      );

    case "pixel-pagination":
      return (
        <PixelPagination>
          <PixelPaginationContent>
            <PixelPaginationItem>
              <PixelPaginationPrevious />
            </PixelPaginationItem>
            <PixelPaginationItem>
              <PixelPaginationLink>1</PixelPaginationLink>
            </PixelPaginationItem>
            <PixelPaginationItem>
              <PixelPaginationLink isActive>2</PixelPaginationLink>
            </PixelPaginationItem>
            <PixelPaginationItem>
              <PixelPaginationLink>3</PixelPaginationLink>
            </PixelPaginationItem>
            <PixelPaginationItem>
              <PixelPaginationNext />
            </PixelPaginationItem>
          </PixelPaginationContent>
        </PixelPagination>
      );

    case "pixel-dialog":
      return (
        <PixelDialog>
          <PixelDialogTrigger asChild>
            <PixelButton>Open Dialog</PixelButton>
          </PixelDialogTrigger>
          <PixelDialogContent>
            <PixelDialogHeader>
              <PixelDialogTitle>Dialog Title</PixelDialogTitle>
              <PixelDialogDescription>
                This is a dialog description
              </PixelDialogDescription>
            </PixelDialogHeader>
            <p>Dialog content goes here.</p>
          </PixelDialogContent>
        </PixelDialog>
      );

    case "pixel-alert-dialog":
      return (
        <PixelAlertDialog>
          <PixelAlertDialogTrigger asChild>
            <PixelButton variant="destructive">Delete</PixelButton>
          </PixelAlertDialogTrigger>
          <PixelAlertDialogContent>
            <PixelAlertDialogHeader>
              <PixelAlertDialogTitle>Are you sure?</PixelAlertDialogTitle>
              <PixelAlertDialogDescription>
                This action cannot be undone.
              </PixelAlertDialogDescription>
            </PixelAlertDialogHeader>
            <PixelAlertDialogFooter>
              <PixelAlertDialogCancel>Cancel</PixelAlertDialogCancel>
              <PixelAlertDialogAction>Continue</PixelAlertDialogAction>
            </PixelAlertDialogFooter>
          </PixelAlertDialogContent>
        </PixelAlertDialog>
      );

    case "pixel-popover":
      return (
        <PixelPopover>
          <PixelPopoverTrigger asChild>
            <PixelButton>Open Popover</PixelButton>
          </PixelPopoverTrigger>
          <PixelPopoverContent>
            <p>This is the popover content</p>
          </PixelPopoverContent>
        </PixelPopover>
      );

    case "pixel-tooltip":
      return (
        <PixelTooltipProvider>
          <PixelTooltip>
            <PixelTooltipTrigger asChild>
              <PixelButton>Hover me</PixelButton>
            </PixelTooltipTrigger>
            <PixelTooltipContent>
              <p>Tooltip text</p>
            </PixelTooltipContent>
          </PixelTooltip>
        </PixelTooltipProvider>
      );

    case "pixel-dropdown-menu":
      return (
        <PixelDropdownMenu>
          <PixelDropdownMenuTrigger asChild>
            <PixelButton>Open Menu</PixelButton>
          </PixelDropdownMenuTrigger>
          <PixelDropdownMenuContent>
            <PixelDropdownMenuItem>Item 1</PixelDropdownMenuItem>
            <PixelDropdownMenuItem>Item 2</PixelDropdownMenuItem>
            <PixelDropdownMenuItem>Item 3</PixelDropdownMenuItem>
          </PixelDropdownMenuContent>
        </PixelDropdownMenu>
      );

    case "pixel-context-menu":
      return (
        <PixelContextMenu>
          <PixelContextMenuTrigger asChild>
            <div className="flex h-[150px] w-[300px] items-center justify-center pixel-borders border-4 border-black dark:border-[#ff8c00]">
              <p>Right click here</p>
            </div>
          </PixelContextMenuTrigger>
          <PixelContextMenuContent>
            <PixelContextMenuItem>Item 1</PixelContextMenuItem>
            <PixelContextMenuItem>Item 2</PixelContextMenuItem>
            <PixelContextMenuItem>Item 3</PixelContextMenuItem>
          </PixelContextMenuContent>
        </PixelContextMenu>
      );

    case "pixel-menubar":
      return (
        <PixelMenubar>
          <PixelMenubarMenu>
            <PixelMenubarTrigger>File</PixelMenubarTrigger>
            <PixelMenubarContent>
              <PixelMenubarItem>New Tab</PixelMenubarItem>
              <PixelMenubarItem>New Window</PixelMenubarItem>
              <PixelMenubarSeparator />
              <PixelMenubarItem>Save</PixelMenubarItem>
              <PixelMenubarItem>Save As...</PixelMenubarItem>
            </PixelMenubarContent>
          </PixelMenubarMenu>
          <PixelMenubarMenu>
            <PixelMenubarTrigger>Edit</PixelMenubarTrigger>
            <PixelMenubarContent>
              <PixelMenubarItem>Cut</PixelMenubarItem>
              <PixelMenubarItem>Copy</PixelMenubarItem>
              <PixelMenubarItem>Paste</PixelMenubarItem>
              <PixelMenubarSeparator />
              <PixelMenubarItem>Select All</PixelMenubarItem>
            </PixelMenubarContent>
          </PixelMenubarMenu>
          <PixelMenubarMenu>
            <PixelMenubarTrigger>View</PixelMenubarTrigger>
            <PixelMenubarContent>
              <PixelMenubarItem>Zoom In</PixelMenubarItem>
              <PixelMenubarItem>Zoom Out</PixelMenubarItem>
              <PixelMenubarSeparator />
              <PixelMenubarItem>Full Screen</PixelMenubarItem>
            </PixelMenubarContent>
          </PixelMenubarMenu>
        </PixelMenubar>
      );

    case "pixel-navigation-menu":
      return (
        <PixelNavigationMenu>
          <PixelNavigationMenuList>
            <PixelNavigationMenuItem>
              <PixelNavigationMenuTrigger>Menu</PixelNavigationMenuTrigger>
              <PixelNavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[300px]">
                  <li>
                    <PixelNavigationMenuLink href="#" className="block p-2">
                      Item 1
                    </PixelNavigationMenuLink>
                  </li>
                  <li>
                    <PixelNavigationMenuLink href="#" className="block p-2">
                      Item 2
                    </PixelNavigationMenuLink>
                  </li>
                </ul>
              </PixelNavigationMenuContent>
            </PixelNavigationMenuItem>
            <PixelNavigationMenuItem>
              <PixelNavigationMenuLink href="#">Link</PixelNavigationMenuLink>
            </PixelNavigationMenuItem>
          </PixelNavigationMenuList>
        </PixelNavigationMenu>
      );

    case "pixel-command":
      return (
        <PixelCommand className="max-w-md">
          <PixelCommandInput placeholder="Search..." />
          <PixelCommandList>
            <PixelCommandEmpty>No results.</PixelCommandEmpty>
            <PixelCommandGroup heading="Items">
              <PixelCommandItem>Item 1</PixelCommandItem>
              <PixelCommandItem>Item 2</PixelCommandItem>
              <PixelCommandItem>Item 3</PixelCommandItem>
            </PixelCommandGroup>
          </PixelCommandList>
        </PixelCommand>
      );

    case "pixel-sheet":
      return (
        <PixelSheet>
          <PixelSheetTrigger asChild>
            <PixelButton>Open Sheet</PixelButton>
          </PixelSheetTrigger>
          <PixelSheetContent>
            <PixelSheetHeader>
              <PixelSheetTitle>Sheet Title</PixelSheetTitle>
            </PixelSheetHeader>
            <p>Sheet content goes here</p>
          </PixelSheetContent>
        </PixelSheet>
      );

    case "pixel-drawer":
      return (
        <PixelDrawer>
          <PixelDrawerTrigger asChild>
            <PixelButton>Open Drawer</PixelButton>
          </PixelDrawerTrigger>
          <PixelDrawerContent>
            <PixelDrawerHeader>
              <PixelDrawerTitle>Drawer Title</PixelDrawerTitle>
              <PixelDrawerDescription>
                This is a drawer description
              </PixelDrawerDescription>
            </PixelDrawerHeader>
            <div className="p-4">
              <p>Drawer content goes here</p>
            </div>
          </PixelDrawerContent>
        </PixelDrawer>
      );

    case "pixel-toast":
      return <ToastDemoWrapper />;

    case "pixel-sonner":
      return <SonnerDemo />;

    case "pixel-separator":
      return (
        <div className="space-y-4">
          <p>Above separator</p>
          <PixelSeparator />
          <p>Below separator</p>
        </div>
      );

    case "pixel-collapsible":
      return (
        <PixelCollapsible>
          <PixelCollapsibleTrigger asChild>
            <PixelButton>Toggle Content</PixelButton>
          </PixelCollapsibleTrigger>
          <PixelCollapsibleContent>
            <p className="mt-4">This content can be toggled</p>
          </PixelCollapsibleContent>
        </PixelCollapsible>
      );

    case "pixel-scroll-area":
      return (
        <PixelScrollArea className="h-[200px] w-[350px] p-4">
          <div className="space-y-2">
            {Array.from({ length: 20 }).map((_, i) => (
              <p key={i}>Scrollable item {i + 1}</p>
            ))}
          </div>
        </PixelScrollArea>
      );

    case "pixel-aspect-ratio":
      return (
        <div className="w-[300px]">
          <PixelAspectRatio ratio={16 / 9}>
            <div className="flex items-center justify-center h-full bg-[#ff8c00] text-white font-bold">
              16:9 Aspect Ratio
            </div>
          </PixelAspectRatio>
        </div>
      );

    case "pixel-hover-card":
      return (
        <PixelHoverCard>
          <PixelHoverCardTrigger asChild>
            <PixelButton>Hover me</PixelButton>
          </PixelHoverCardTrigger>
          <PixelHoverCardContent>
            <p>This appears on hover</p>
          </PixelHoverCardContent>
        </PixelHoverCard>
      );

    // Animation Components
    case "pixel-blur-text":
      return (
        <div className="space-y-4">
          <PixelBlurText text="Pixel Perfect!" variant="primary" size="lg" />
        </div>
      );

    case "pixel-glitch-text":
      return (
        <div className="space-y-4">
          <PixelGlitchText text="SYSTEM ERROR" variant="cyber" size="xl" />
        </div>
      );

    case "pixel-gradient-text":
      return (
        <div className="space-y-4">
          <PixelGradientText text="RAINBOW" variant="sunset" size="lg" />
        </div>
      );

    case "pixel-shiny-text":
      return (
        <div className="space-y-4">
          <PixelShinyText text="LEGENDARY" variant="gold" size="lg" />
        </div>
      );

    case "pixel-count-up":
      return (
        <div className="space-y-4">
          <PixelCountUp to={9999} separator="," variant="success" size="xl" />
        </div>
      );

    case "pixel-circular-text":
      return (
        <div className="flex justify-center items-center p-12">
          <PixelCircularText
            text="ROUND AND ROUND"
            spinDuration={15}
            variant="primary"
            size="lg"
          />
        </div>
      );

    case "pixel-spotlight-card":
      return (
        <PixelSpotlightCard
          variant="primary"
          size="md"
          className="w-full max-w-sm"
        >
          <h3 className="text-xl font-bold mb-2 dark:text-white">Featured</h3>
          <p className="dark:text-white/80">
            Hover to reveal spotlight effect!
          </p>
        </PixelSpotlightCard>
      );

    case "pixel-glare-card":
      return (
        <PixelGlareCard variant="glass" size="md" className="w-full max-w-sm">
          <h3 className="text-xl font-bold mb-2 dark:text-white">
            Premium Card
          </h3>
          <p className="dark:text-white/80">With beautiful glare effect</p>
        </PixelGlareCard>
      );

    case "pixel-split-text":
      return (
        <div className="space-y-4">
          <PixelSplitText text="S P L I T" splitType="chars" />
        </div>
      );

    case "pixel-rotating-text":
      return (
        <div className="space-y-4">
          <PixelRotatingText texts={["Fast", "Simple", "Pixel"]} />
        </div>
      );

    case "pixel-letter-glitch":
      return (
        <div className="space-y-4">
          <PixelLetterGlitch text="GLITCH" />
        </div>
      );

    case "pixel-shuffle-text":
      return (
        <div className="space-y-4">
          <PixelShuffleText text="SHUFFLE" />
        </div>
      );

    case "pixel-text-pressure":
      return (
        <div className="space-y-4">
          <PixelTextPressure text="PRESS" />
        </div>
      );

    case "pixel-true-focus":
      return (
        <div className="space-y-4">
          <PixelTrueFocus sentence="True Focus" />
        </div>
      );

    case "pixel-tilted-card":
      return <PixelTiltedCard className="w-full max-w-sm" />;

    case "pixel-decay-card":
      return <PixelDecayCard className="w-full max-w-sm" />;

    case "pixel-sticker-peel":
      return (
        <div className="w-full max-w-sm">
          <PixelStickerPeel imageSrc="/sticker.png" />
        </div>
      );

    case "pixel-bounce-cards":
      return (
        <div className="w-full">
          <PixelBounceCards />
        </div>
      );

    case "pixel-dot-grid":
      return (
        <div className="w-full h-48">
          <PixelDotGrid />
        </div>
      );

    case "pixel-squares":
      return (
        <div className="w-full h-48">
          <PixelSquares />
        </div>
      );

    case "pixel-waves":
      return (
        <div className="w-full h-48">
          <PixelWaves />
        </div>
      );

    case "pixel-ribbons":
      return (
        <div className="w-full h-48">
          <PixelRibbons />
        </div>
      );

    case "pixel-meta-balls":
      return (
        <div className="w-full h-48">
          <PixelMetaBalls />
        </div>
      );

    case "pixel-plasma":
      return (
        <div className="w-full h-48">
          <PixelPlasma />
        </div>
      );

    case "pixel-grid-motion":
      return (
        <div className="w-full h-48">
          <PixelGridMotion />
        </div>
      );

    case "pixel-aurora":
      return (
        <div className="w-full h-48">
          <PixelAurora />
        </div>
      );

    case "pixel-galaxy":
      return (
        <div className="w-full h-48">
          <PixelGalaxy />
        </div>
      );

    case "pixel-ripple-grid":
      return (
        <div className="w-full h-48">
          <PixelRippleGrid />
        </div>
      );

    case "pixel-blob-cursor":
      return (
        <div className="w-full h-48">
          <PixelBlobCursor />
        </div>
      );

    case "pixel-splash-cursor":
      return (
        <div className="w-full h-48">
          <PixelSplashCursor />
        </div>
      );

    case "pixel-target-cursor":
      return (
        <div className="w-full h-48">
          <PixelTargetCursor />
        </div>
      );

    case "pixel-trail":
      return (
        <div className="w-full h-48">
          <PixelTrail />
        </div>
      );

    case "pixel-image-trail":
      return (
        <div className="w-full h-48">
          <PixelImageTrail images={["/example1.png", "/example2.png"]} />
        </div>
      );

    case "pixel-pricing":
      return (
        <PixelPricing columns={3} gap="md" className="max-w-5xl mx-auto">
          <PixelPricingCard variant="default">
            <PixelPricingTitle>Basic</PixelPricingTitle>
            <PixelPricingPrice>$9</PixelPricingPrice>
            <PixelPricingPeriod>per month</PixelPricingPeriod>
            <PixelPricingDescription>For individuals</PixelPricingDescription>
            <PixelPricingFeatures>
              <PixelPricingFeature>10 Projects</PixelPricingFeature>
              <PixelPricingFeature>5GB Storage</PixelPricingFeature>
              <PixelPricingFeature>Email Support</PixelPricingFeature>
            </PixelPricingFeatures>
            <PixelPricingActions>
              <PixelButton variant="secondary">Choose Plan</PixelButton>
            </PixelPricingActions>
          </PixelPricingCard>

          <PixelPricingCard variant="featured">
            <PixelPricingBadge>Popular</PixelPricingBadge>
            <PixelPricingTitle>Pro</PixelPricingTitle>
            <PixelPricingPrice>$29</PixelPricingPrice>
            <PixelPricingPeriod>per month</PixelPricingPeriod>
            <PixelPricingDescription>For teams</PixelPricingDescription>
            <PixelPricingFeatures>
              <PixelPricingFeature>Unlimited Projects</PixelPricingFeature>
              <PixelPricingFeature>50GB Storage</PixelPricingFeature>
              <PixelPricingFeature>Priority Support</PixelPricingFeature>
            </PixelPricingFeatures>
            <PixelPricingActions>
              <PixelButton>Choose Plan</PixelButton>
            </PixelPricingActions>
          </PixelPricingCard>

          <PixelPricingCard variant="default">
            <PixelPricingTitle>Firm</PixelPricingTitle>
            <PixelPricingPrice>$99</PixelPricingPrice>
            <PixelPricingPeriod>per month</PixelPricingPeriod>
            <PixelPricingDescription>For organizations</PixelPricingDescription>
            <PixelPricingFeatures>
              <PixelPricingFeature>Unlimited Everything</PixelPricingFeature>
              <PixelPricingFeature>500GB Storage</PixelPricingFeature>
              <PixelPricingFeature>24/7 Support</PixelPricingFeature>
            </PixelPricingFeatures>
            <PixelPricingActions>
              <PixelButton variant="secondary">Contact Sales</PixelButton>
            </PixelPricingActions>
          </PixelPricingCard>
        </PixelPricing>
      );

    case "pixel-footer":
      return (
        <PixelFooter variant="default" size="md">
          <PixelFooterGrid>
            <PixelFooterSection>
              <PixelFooterTitle>Product</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink>
                  <a href="#">Features</a>
                </PixelFooterLink>
                <PixelFooterLink>
                  <a href="#">Pricing</a>
                </PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>

            <PixelFooterSection>
              <PixelFooterTitle>Company</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink>
                  <a href="#">About</a>
                </PixelFooterLink>
                <PixelFooterLink>
                  <a href="#">Blog</a>
                </PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>

            <PixelFooterSection>
              <PixelFooterTitle>Resources</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink>
                  <a href="#">Docs</a>
                </PixelFooterLink>
                <PixelFooterLink>
                  <a href="#">Guides</a>
                </PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>

            <PixelFooterSection>
              <PixelFooterTitle>Legal</PixelFooterTitle>
              <PixelFooterLinks>
                <PixelFooterLink>
                  <a href="#">Privacy</a>
                </PixelFooterLink>
                <PixelFooterLink>
                  <a href="#">Terms</a>
                </PixelFooterLink>
              </PixelFooterLinks>
            </PixelFooterSection>
          </PixelFooterGrid>

          <PixelFooterDivider />

          <PixelFooterBottom>
            <PixelFooterCopyright>© 2025 Pixel UI</PixelFooterCopyright>
            <PixelFooterSocial>
              <PixelFooterSocialLink href="#">🐦</PixelFooterSocialLink>
              <PixelFooterSocialLink href="#">💼</PixelFooterSocialLink>
            </PixelFooterSocial>
          </PixelFooterBottom>
        </PixelFooter>
      );

    case "pixel-testimonials":
      return (
        <PixelTestimonials columns={3} gap="md" className="max-w-5xl mx-auto">
          <PixelTestimonialCard variant="default">
            <PixelTestimonialRating />
            <PixelTestimonialQuote>
              "Amazing library! The pixel-art aesthetic is perfect."
            </PixelTestimonialQuote>
            <PixelTestimonialAuthor>
              <PixelTestimonialAvatar>SM</PixelTestimonialAvatar>
              <PixelTestimonialInfo>
                <PixelTestimonialName>Sarah Miller</PixelTestimonialName>
                <PixelTestimonialRole>Designer</PixelTestimonialRole>
              </PixelTestimonialInfo>
            </PixelTestimonialAuthor>
          </PixelTestimonialCard>

          <PixelTestimonialCard variant="primary">
            <PixelTestimonialRating />
            <PixelTestimonialQuote>
              "Easy to use and highly customizable. Love it!"
            </PixelTestimonialQuote>
            <PixelTestimonialAuthor>
              <PixelTestimonialAvatar>MJ</PixelTestimonialAvatar>
              <PixelTestimonialInfo>
                <PixelTestimonialName>Mike Johnson</PixelTestimonialName>
                <PixelTestimonialRole>Developer</PixelTestimonialRole>
              </PixelTestimonialInfo>
            </PixelTestimonialAuthor>
          </PixelTestimonialCard>

          <PixelTestimonialCard variant="default">
            <PixelTestimonialRating />
            <PixelTestimonialQuote>
              "Excellent attention to detail. Production ready."
            </PixelTestimonialQuote>
            <PixelTestimonialAuthor>
              <PixelTestimonialAvatar>EK</PixelTestimonialAvatar>
              <PixelTestimonialInfo>
                <PixelTestimonialName>Emma Kim</PixelTestimonialName>
                <PixelTestimonialRole>PM</PixelTestimonialRole>
              </PixelTestimonialInfo>
            </PixelTestimonialAuthor>
          </PixelTestimonialCard>
        </PixelTestimonials>
      );

    case "pixel-stats":
      return (
        <PixelStats columns={4} gap="md" className="max-w-6xl mx-auto">
          <PixelStatItem variant="default">
            <PixelStatIcon>👥</PixelStatIcon>
            <PixelStatValue>10K+</PixelStatValue>
            <PixelStatLabel>Active Users</PixelStatLabel>
            <PixelStatTrend trend="up">+12%</PixelStatTrend>
          </PixelStatItem>

          <PixelStatItem variant="primary">
            <PixelStatIcon>⭐</PixelStatIcon>
            <PixelStatValue>4.9/5</PixelStatValue>
            <PixelStatLabel>User Rating</PixelStatLabel>
          </PixelStatItem>

          <PixelStatItem variant="secondary">
            <PixelStatIcon>🚀</PixelStatIcon>
            <PixelStatValue>99.9%</PixelStatValue>
            <PixelStatLabel>Uptime</PixelStatLabel>
          </PixelStatItem>

          <PixelStatItem variant="gradient">
            <PixelStatIcon>💰</PixelStatIcon>
            <PixelStatValue>$2M+</PixelStatValue>
            <PixelStatLabel>Revenue</PixelStatLabel>
            <PixelStatTrend trend="up">+25%</PixelStatTrend>
          </PixelStatItem>
        </PixelStats>
      );

    case "pixel-faq":
      return (
        <PixelFaq variant="default" className="max-w-3xl mx-auto">
          <PixelFaqList>
            <PixelFaqItem defaultOpen>
              <PixelFaqQuestion>
                How do I install the components?
              </PixelFaqQuestion>
              <PixelFaqAnswer>
                You can install components by copying the code from our docs or
                via npm.
              </PixelFaqAnswer>
            </PixelFaqItem>

            <PixelFaqItem>
              <PixelFaqQuestion>Is this library free to use?</PixelFaqQuestion>
              <PixelFaqAnswer>
                Yes! All components are completely free and open source.
              </PixelFaqAnswer>
            </PixelFaqItem>

            <PixelFaqItem>
              <PixelFaqQuestion>Can I customize the styling?</PixelFaqQuestion>
              <PixelFaqAnswer>
                Absolutely! All components support className prop for easy
                customization.
              </PixelFaqAnswer>
            </PixelFaqItem>
          </PixelFaqList>
        </PixelFaq>
      );

    case "pixel-loader":
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-sm font-bold mb-2 text-center font-pixel">
              Cassette
            </h4>
            <PixelLoader variant="cassette" size="sm" text="LOADING" />
          </div>
          <div>
            <h4 className="text-sm font-bold mb-2 text-center font-pixel">
              Floppy
            </h4>
            <PixelLoader variant="floppy" size="sm" text="READING" />
          </div>
          <div>
            <h4 className="text-sm font-bold mb-2 text-center font-pixel">
              CRT
            </h4>
            <PixelLoader variant="crt" size="sm" text="BOOTING" />
          </div>
        </div>
      );

    case "pixel-terminal":
      return (
        <PixelTerminal
          variant="matrix"
          size="md"
          prompt="user@pixel:~$"
          commands={{
            hello: () => "Hello! Welcome to Pixel Terminal 👋",
            info: () => 'Pixel Terminal v1.0\nType "help" for commands',
            joke: () =>
              "Why do programmers prefer dark mode?\nBecause light attracts bugs! 🐛",
          }}
          welcomeMessage={`Pixel Terminal v1.0
Type 'help' for available commands.
Try: hello, info, joke

`}
        />
      );

    case "pixel-game-ui":
      return (
        <div className="space-y-8 max-w-4xl mx-auto">
          {/* Character Stats Section */}
          <div className="border-4 border-black p-6 bg-white dark:bg-[#2a2a2a] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 border-4 border-black bg-[#ff8c00] flex items-center justify-center text-3xl">
                🧙
              </div>
              <div>
                <h3 className="text-xl font-bold font-pixel">Wizard</h3>
                <p className="text-sm opacity-70">Level 12</p>
              </div>
            </div>
            <div className="space-y-3">
              <PixelHealthBar current={85} max={100} label="HP" />
              <PixelManaBar current={60} max={100} label="MP" />
              <PixelXPBar
                currentXP={350}
                requiredXP={500}
                level={12}
                showLevel={false}
              />
            </div>
          </div>

          {/* Inventory Grid */}
          <PixelInventory columns={5} title="Inventory">
            <PixelInventorySlot item="⚔️" rarity="legendary" />
            <PixelInventorySlot item="🛡️" rarity="epic" />
            <PixelInventorySlot item="💊" count={5} rarity="common" />
            <PixelInventorySlot item="🔮" rarity="rare" />
            <PixelInventorySlot item="👑" rarity="legendary" />
            <PixelInventorySlot isEmpty />
            <PixelInventorySlot isEmpty />
            <PixelInventorySlot isEmpty />
            <PixelInventorySlot isEmpty />
            <PixelInventorySlot isEmpty />
          </PixelInventory>

          {/* Achievement Notification */}
          <PixelAchievement
            variant="gold"
            title="First Victory"
            description="Complete your first quest"
            icon="🏆"
            points={50}
          />

          {/* Damage Numbers */}
          <div className="flex items-center justify-center gap-8 p-8 border-4 border-black bg-white dark:bg-[#2a2a2a] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <PixelDamageNumber value={50} type="damage" animate={false} />
            <PixelDamageNumber value={25} type="heal" animate={false} />
            <PixelDamageNumber value={100} type="critical" animate={false} />
          </div>
        </div>
      );

    case "pixel-window":
      return (
        <PixelWindow title="My Computer" icon="💻" className="w-[400px]">
          <PixelWindowContent>
            <div className="p-4">
              <h3 className="font-bold font-pixel mb-2">
                Welcome to Pixel Window!
              </h3>
              <p className="text-sm mb-4">
                This is a draggable, resizable window component styled like
                Windows 95/98.
              </p>
              <div className="flex gap-2">
                <PixelButton size="sm">Open</PixelButton>
                <PixelButton size="sm" variant="secondary">
                  Save
                </PixelButton>
              </div>
            </div>
          </PixelWindowContent>
        </PixelWindow>
      );

    case "pixel-audio-visualizer":
      return (
        <div className="max-w-2xl mx-auto">
          <PixelAudioVisualizer variant="bars" size="md" animate={true} />
        </div>
      );

    case "pixel-code-block":
      return (
        <div className="space-y-6">
          <PixelCodeBlock
            code={`function greet(name) {\n  console.log(\`Hello, \${name}!\`);\n  return true;\n}\n\ngreet("World");`}
            language="javascript"
            title="example.js"
            variant="terminal"
            highlightLines={[2, 3]}
          />
          <div className="flex gap-4 items-center">
            <span className="font-pixel text-sm">Inline code:</span>
            <PixelCode>const x = 10;</PixelCode>
          </div>
        </div>
      );

    case "pixel-timeline":
      return (
        <div className="max-w-3xl">
          <PixelTimeline
            items={[
              {
                title: "Project Started",
                description: "Initial planning phase completed.",
                date: "Jan 2024",
                variant: "success" as const,
                icon: "🚀",
              },
              {
                title: "Development",
                description: "Building core features.",
                date: "Feb 2024",
                variant: "warning" as const,
                icon: "⚡",
              },
              {
                title: "Testing",
                description: "QA scheduled for next month.",
                date: "Mar 2024",
                variant: "default" as const,
                icon: "🔍",
              },
            ]}
            markerSize="md"
            markerShape="circle"
          />
        </div>
      );

    case "pixel-notification":
      return (
        <div className="space-y-4 max-w-md mx-auto">
          <PixelNotification
            title="Success!"
            description="Your changes have been saved successfully."
            variant="success"
            icon="✓"
            onClose={() => {}}
          />
          <PixelNotification
            title="Warning!"
            description="This action requires your attention."
            variant="warning"
            icon="⚠"
            action={{
              label: "Review",
              onClick: () => alert("Reviewing..."),
            }}
          />
          <PixelNotification
            title="Error!"
            description="Something went wrong. Please try again."
            variant="error"
            icon="✕"
            onClose={() => {}}
          />
        </div>
      );

    case "pixel-chat":
      return (
        <div className="flex justify-center">
          <PixelChat
            messages={[
              {
                id: "1",
                text: "Hey, check out these pixel components!",
                sender: "other",
                username: "Alice",
                timestamp: "10:00 AM",
                avatar: "👩",
              },
              {
                id: "2",
                text: "They look amazing! Very retro! 😄",
                sender: "user",
                timestamp: "10:01 AM",
              },
              {
                id: "3",
                text: "I know right! The 8-bit style is perfect!",
                sender: "other",
                username: "Alice",
                timestamp: "10:02 AM",
                avatar: "👩",
              },
            ]}
            size="sm"
            onSendMessage={(text) => console.log("Sent:", text)}
          />
        </div>
      );

    case "pixel-countdown":
      return (
        <div className="space-y-8">
          <div className="flex justify-center">
            <PixelCountdown
              targetDate={new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)}
              variant="flip"
              size="md"
              labels={true}
            />
          </div>
          <div className="flex justify-center">
            <PixelTimer
              initialMinutes={5}
              initialSeconds={0}
              variant="digital"
              size="md"
              showControls={true}
            />
          </div>
        </div>
      );
    case "pixel-timeline-navigation": {
      const [timelineStep, setTimelineStep] = useState(2);
      return (
        <div className="space-y-12">
          <div>
            <h3 className="text-lg font-bold mb-4">Horizontal Timeline</h3>
            <PixelTimelineNavigation
              currentStep={timelineStep}
              onStepClick={setTimelineStep}
            >
              <PixelTimelineSteps>
                <PixelTimelineStep
                  step={1}
                  label="Account"
                  description="Setup account"
                />
                <PixelTimelineStep
                  step={2}
                  label="Profile"
                  description="Add details"
                />
                <PixelTimelineStep
                  step={3}
                  label="Complete"
                  description="Finish setup"
                />
              </PixelTimelineSteps>
            </PixelTimelineNavigation>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Vertical Timeline</h3>
            <PixelTimelineNavigation
              currentStep={2}
              orientation="vertical"
              size="sm"
            >
              <PixelTimelineSteps>
                <PixelTimelineStep
                  step={1}
                  label="Start"
                  description="Begin your journey"
                />
                <PixelTimelineStep
                  step={2}
                  label="Progress"
                  description="Working on it"
                />
                <PixelTimelineStep
                  step={3}
                  label="Review"
                  description="Almost there"
                />
                <PixelTimelineStep
                  step={4}
                  label="Done"
                  description="All complete"
                />
              </PixelTimelineSteps>
            </PixelTimelineNavigation>
          </div>
        </div>
      );
    }
    default:
      return (
        <div className="text-center py-8">
          <p className="text-sm text-black/60 dark:text-white/60">
            Interactive preview available - see usage code below
          </p>
        </div>
      );
  }
}

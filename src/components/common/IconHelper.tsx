import React from 'react';
import {
  Sparkles,
  Video,
  Clapperboard,
  Youtube,
  FileText,
  Share2,
  Flame,
  BookOpen,
  UserCheck,
  PenTool,
  Languages,
  Hash,
  Copy,
  Check,
  RotateCcw,
  Trash2,
  Search,
  Menu,
  X,
  ChevronRight,
  ArrowRight,
  Shield,
  Zap,
  Smartphone,
  CheckCircle2,
  Clock,
  ExternalLink,
  History,
  SlidersHorizontal,
  Info,
  Send,
  HelpCircle,
  ChevronDown
} from 'lucide-react';

interface IconHelperProps {
  name: string;
  className?: string;
}

export const IconHelper: React.FC<IconHelperProps> = ({ name, className = 'w-5 h-5' }) => {
  switch (name) {
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'Video':
      return <Video className={className} />;
    case 'Clapperboard':
      return <Clapperboard className={className} />;
    case 'Youtube':
      return <Youtube className={className} />;
    case 'FileText':
      return <FileText className={className} />;
    case 'Share2':
      return <Share2 className={className} />;
    case 'Flame':
      return <Flame className={className} />;
    case 'BookOpen':
      return <BookOpen className={className} />;
    case 'UserCheck':
      return <UserCheck className={className} />;
    case 'PenTool':
      return <PenTool className={className} />;
    case 'Languages':
      return <Languages className={className} />;
    case 'Hash':
      return <Hash className={className} />;
    case 'Copy':
      return <Copy className={className} />;
    case 'Check':
      return <Check className={className} />;
    case 'RotateCcw':
      return <RotateCcw className={className} />;
    case 'Trash2':
      return <Trash2 className={className} />;
    case 'Search':
      return <Search className={className} />;
    case 'Menu':
      return <Menu className={className} />;
    case 'X':
      return <X className={className} />;
    case 'ChevronRight':
      return <ChevronRight className={className} />;
    case 'ArrowRight':
      return <ArrowRight className={className} />;
    case 'Shield':
      return <Shield className={className} />;
    case 'Zap':
      return <Zap className={className} />;
    case 'Smartphone':
      return <Smartphone className={className} />;
    case 'CheckCircle2':
      return <CheckCircle2 className={className} />;
    case 'Clock':
      return <Clock className={className} />;
    case 'ExternalLink':
      return <ExternalLink className={className} />;
    case 'History':
      return <History className={className} />;
    case 'SlidersHorizontal':
      return <SlidersHorizontal className={className} />;
    case 'Info':
      return <Info className={className} />;
    case 'Send':
      return <Send className={className} />;
    case 'HelpCircle':
      return <HelpCircle className={className} />;
    case 'ChevronDown':
      return <ChevronDown className={className} />;
    default:
      return <Sparkles className={className} />;
  }
};

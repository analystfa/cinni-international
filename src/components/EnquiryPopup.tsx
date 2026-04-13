import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail } from "lucide-react";

interface EnquiryPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productTitle?: string;
}

const EnquiryPopup = ({ open, onOpenChange, productTitle }: EnquiryPopupProps) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="sm:max-w-md bg-background">
      <DialogHeader>
        <DialogTitle className="font-heading text-2xl">Get a Quote</DialogTitle>
        {productTitle && (
          <DialogDescription className="font-body text-muted-foreground">
            Interested in: {productTitle}
          </DialogDescription>
        )}
      </DialogHeader>
      <p className="font-body text-sm text-muted-foreground mb-6">
        Contact us for bulk pricing, MOQ, and customization options.
      </p>
      <div className="flex flex-col gap-3">
        <Button asChild className="gap-2" size="lg">
          <a href="https://wa.me/917084500555?text=Hi%2C%20I'm%20interested%20in%20your%20wholesale%20leather%20products" target="_blank" rel="noopener noreferrer">
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </Button>
        <Button asChild variant="outline" className="gap-2" size="lg">
          <a href="mailto:hello@cinni.com?subject=Wholesale%20Enquiry">
            <Mail size={18} />
            Send an Email
          </a>
        </Button>
      </div>
    </DialogContent>
  </Dialog>
);

export default EnquiryPopup;

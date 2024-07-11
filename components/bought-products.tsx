// "use client";
// import React, { useEffect } from "react";
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { usePurchaseStore } from "@/Hooks/use-purchase-store";

// function BoughtProducts() {
//   const { isOpen, onClose } = usePurchaseStore();
//   const [mounted, setMounted] = React.useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;
//   return (
//     <div>
//       <Sheet open={isOpen} onOpenChange={onClose}>
//         <SheetContent>
//           <SheetHeader>
//             <SheetTitle>Are you absolutely sure?</SheetTitle>
//             <SheetDescription>
//               This action cannot be undone. This will permanently delete your
//               account and remove your data from our servers.
//             </SheetDescription>
//           </SheetHeader>
//         </SheetContent>
//       </Sheet>
//     </div>
//   );
// }

// export default BoughtProducts;

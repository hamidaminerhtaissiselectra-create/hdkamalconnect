-- Fix security: Add SELECT policy for customer_requests to restrict viewing to admins only
CREATE POLICY "Only admins can view customer requests"
ON public.customer_requests
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Remove duplicate INSERT policy (keep only one)
DROP POLICY IF EXISTS "Anyone can insert requests" ON public.customer_requests;
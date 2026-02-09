-- Vérifier que la table customer_requests existe déjà et s'assurer que les RLS sont bien configurés

-- Activer RLS si ce n'est pas déjà fait
ALTER TABLE public.customer_requests ENABLE ROW LEVEL SECURITY;

-- Politique pour permettre à tout le monde d'insérer (formulaires publics)
DROP POLICY IF EXISTS "Anyone can insert requests" ON public.customer_requests;
CREATE POLICY "Anyone can insert requests"
ON public.customer_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Politique pour que seuls les admins puissent lire
DROP POLICY IF EXISTS "Admins can view all requests" ON public.customer_requests;
CREATE POLICY "Admins can view all requests"
ON public.customer_requests
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Politique pour que seuls les admins puissent mettre à jour
DROP POLICY IF EXISTS "Admins can update requests" ON public.customer_requests;
CREATE POLICY "Admins can update requests"
ON public.customer_requests
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Politique pour que seuls les admins puissent supprimer
DROP POLICY IF EXISTS "Admins can delete requests" ON public.customer_requests;
CREATE POLICY "Admins can delete requests"
ON public.customer_requests
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));
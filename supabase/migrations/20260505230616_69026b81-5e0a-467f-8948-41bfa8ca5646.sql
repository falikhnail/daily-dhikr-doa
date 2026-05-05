DROP POLICY IF EXISTS "Anyone can insert subscription" ON public.push_subscriptions;
DROP POLICY IF EXISTS "Anyone can update subscription" ON public.push_subscriptions;
DROP POLICY IF EXISTS "Anyone can delete subscription" ON public.push_subscriptions;
DROP POLICY IF EXISTS "Anyone can read subscription" ON public.push_subscriptions;
-- No policies => RLS denies all anon/authenticated access. Service role (edge functions) bypasses RLS.

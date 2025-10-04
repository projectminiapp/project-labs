import { auth } from '@/auth';
import { Page } from '@/components/PageLayout';
import Image from 'next/image';

export default async function TabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  // If the user is not authenticated, redirect to the login page
  if (!session) {
    console.log('Not authenticated');
    // redirect('/');
  }

  return (
    <Page>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-md bg-black/20">
          <div className="container mx-auto">
            {session?.user && (
              <div className="flex justify-between items-center p-4">
                <div className="flex items-center space-x-3">
                  {session.user.profilePictureUrl && (
                    <div className="relative w-10 h-10">
                      <Image
                        src={session.user.profilePictureUrl}
                        alt="Profile"
                        width={40}
                        height={40}
                        className="rounded-full border-2 border-blue-500"
                        priority
                      />
                    </div>
                  )}
                  <div>
                    <p className="text-white font-medium">
                      {session.user.username}
                    </p>
                    <p className="text-blue-200 text-sm">
                      {session.user.walletAddress?.slice(0, 6)}...
                      {session.user.walletAddress?.slice(-4)}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </header>
        
        <main className="pt-20">
          {children}
        </main>
      </div>
    </Page>
  );
}
